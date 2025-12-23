import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-light via-light to-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Cómo funciona</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-secondary/30 -z-10"></div>

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-white rounded-full border border-secondary/30 flex items-center justify-center shadow-sm z-10">
                    <step.icon size={40} className="text-primary" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-light">
                    {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-dark/70 text-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;