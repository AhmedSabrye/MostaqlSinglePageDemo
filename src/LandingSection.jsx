import React from "react";
import logo from "./assets/logo.png";
import { useLanguage } from "./App";

export default function LandingSection() {
  const { language, isArabic } = useLanguage();

  const content = {
    EN: {
      title: "The best way to build your brand",
      description:
        "We are a team of designers and developers who are passionate about creating beautiful and functional websites.",
    },
    AR: {
      title: "أفضل طريقة لبناء علامتك التجارية",
      description:
        "نحن فريق من المصممين والمطورين الشغوفين بإنشاء مواقع ويب جميلة وعملية.",
    },
  };

  const currentContent = content[language];

  return (
    <section
      className="relative w-full min-h-[800px] flex flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full flex flex-col items-center justify-center pt-16 pb-24 flex-1">
        <div className="relative size-42 md:size-96 rounded-full items-center overflow-hidden bg-black/80 p-5">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-6xl font-bold text-white mt-10 text-center">
          {currentContent.title}
        </h1>
        <p className="text-white text-center text-2xl mt-5 max-w-2xl">
          {currentContent.description}
        </p>
      </div>
      <div className="bottom-0 left-0 w-full overflow-hidden leading-none"></div>
    </section>
  );
}
