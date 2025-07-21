import React from "react";
import { useLanguage } from "./App";

export default function Footer() {
  const { language, isArabic } = useLanguage();

  const content = {
    EN: {
      text: "© 2024 Company Name. All rights reserved.",
    },
    AR: {
      text: "© 2024 اسم الشركة. جميع الحقوق محفوظة.",
    },
  };

  const currentContent = content[language];

  return (
    <footer className="mt-16 bg-white py-4 text-center text-gray-500 text-sm border-t">
      {currentContent.text}
    </footer>
  );
}
