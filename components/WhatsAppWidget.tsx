import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Paperclip } from 'lucide-react';
import { ChatMessage } from '../types';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    text: '¡Hola! Soy el asistente de NANDO-GP 🚚 ¿Qué necesitas: mudanza, portes o transporte de oficina?',
    sender: 'bot',
    timestamp: new Date()
  }
];

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // TODO: FUTURE INTEGRATION WITH N8N WEBHOOK
    // Example: await fetch('YOUR_N8N_WEBHOOK_URL', { method: 'POST', body: JSON.stringify({ message: inputText }) });

    // Mock response logic for MVP
    setTimeout(() => {
      const botResponses = [
        "¡Entendido! Un agente revisará tu solicitud enseguida.",
        "Dime origen, destino y fecha aproximada y te digo disponibilidad.",
        "Perfecto, tomamos nota. ¿Necesitas también embalaje?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-dark border-2 border-accent shadow-xl flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Chat en WhatsApp"
      >
        <MessageCircle size={32} />
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-dark"></span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Smartphone Container */}
            <div className="relative w-full max-w-[360px] h-[650px] max-h-[85vh] bg-[#E5DDD5] rounded-[3rem] border-[8px] border-dark shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                
                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-dark rounded-b-xl z-20"></div>

                {/* Header */}
                <div className="bg-gradient-to-r from-dark to-primary p-4 pt-10 pb-3 flex items-center justify-between shadow-sm z-10 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold border border-white/30">
                            F
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">NANDO-GP</h3>
                            <p className="text-xs text-white/80">En línea</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* Chat Area (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll bg-[#EFE8DE]" style={{ backgroundImage: 'radial-gradient(#A69F91 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    {messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div 
                                className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm relative ${
                                    msg.sender === 'user' 
                                    ? 'bg-[#E7FFDB] text-gray-800 rounded-tr-none' 
                                    : 'bg-white text-gray-800 rounded-tl-none'
                                }`}
                            >
                                {msg.text}
                                <span className="text-[10px] text-gray-400 block text-right mt-1">
                                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="flex justify-start">
                             <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="bg-[#F0F2F5] p-3 flex items-center gap-2">
                    <button className="text-secondary p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <Paperclip size={20} />
                    </button>
                    <div className="flex-1 relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe un mensaje"
                            className="w-full bg-white border-none rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <button 
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className={`p-3 rounded-full flex items-center justify-center transition-all ${
                            inputText.trim() 
                            ? 'bg-primary text-white hover:bg-[#724b2f]' 
                            : 'bg-gray-200 text-gray-400'
                        }`}
                    >
                        <Send size={18} />
                    </button>
                </div>

                {/* Bottom Safe Area indicator */}
                <div className="bg-[#F0F2F5] h-5 w-full flex justify-center items-start">
                     <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;