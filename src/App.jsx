import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyUsSection from "./components/WhyUsSection";
import EcommerceCarousel from "./components/EcommerceCarousel";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";
import FooterSection from "./components/FooterSection";
import ClientSection from "./components/ClientSection";

function App() {
  return (
    <div className="min-h-screen">

      {/* Header Content */}
      <div className="relative">
        <Header />
        <div className="pt-16">
          <HeroSection />
        </div>
      </div>

      {/* Main Content */}
      <div>
        <FeaturesSection />
        <WhyUsSection />
        <EcommerceCarousel /> 
        <ServicesSection />
        <BenefitsSection />
      </div>

      {/* Footer Content */}
      <div className="relative mt-[11rem]">
        <ClientSection />
        <div className="">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
