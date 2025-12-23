import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white/80 via-white/40 to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Servicios</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 bg-light/80 backdrop-blur-sm rounded-2xl border border-secondary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-white shadow-sm text-primary group-hover:text-accent transition-colors">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-dark/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;