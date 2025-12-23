import React from 'react';
import TopBar from './components/TopBar';
import PresentationSection from './components/PresentationSection';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-light selection:bg-accent selection:text-white flex flex-col">
      <TopBar />
      
      <main className="flex-grow">
        <PresentationSection />
        <ServicesGrid />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;