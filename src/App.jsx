import React, { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import LandingSection from "./LandingSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

// Create Language Context
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export default function App() {
  const [language, setLanguage] = useState("EN");
  const isArabic = language === "AR";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic }}>
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="font-sans bg-gray-50 min-h-screen flex flex-col"
      >
        <div className="hero">
          <Navbar />
          <LandingSection />
        </div>
        <main className="flex-1 w-full container mx-auto px-4 space-y-16">
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
