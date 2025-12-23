import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-white/40 via-white/70 to-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Preguntas Frecuentes</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`bg-light border rounded-xl overflow-hidden transition-all duration-300 ${openId === item.id ? 'border-accent shadow-md' : 'border-secondary/30 hover:border-secondary'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="text-lg font-semibold text-dark">{item.question}</span>
                {openId === item.id ? (
                  <ChevronUp className="text-primary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-secondary flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-dark/80 leading-relaxed border-t border-secondary/10 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;