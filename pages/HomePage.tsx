import React from "react";
import PresentationSection from "../components/PresentationSection";
import ServicesGrid from "../components/ServicesGrid";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

const HomePage: React.FC = () => {
  return (
    <>
      <PresentationSection />
      <ServicesGrid />
      <HowItWorks />
      <FAQ />
    </>
  );
};

export default HomePage;
