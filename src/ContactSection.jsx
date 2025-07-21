import React from "react";
import { useLanguage } from "./App";

export default function ContactSection() {
  const { language, isArabic } = useLanguage();

  const content = {
    EN: {
      title: "Contact Us",
      subtitle:
        "We're here to help you achieve your goals. Contact us today and let's start your success journey together",
      form: {
        title: "Send us a message",
        name: "Name",
        namePlaceholder: "Enter your full name",
        email: "Email",
        emailPlaceholder: "Enter your email address",
        message: "Message",
        messagePlaceholder: "Write your message here...",
      },
      contact: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        address: "Address",
        location: "Riyadh, Saudi Arabia",
      },
      hours: {
        title: "Business Hours",
        weekdays: "Sunday – Thursday",
        weekdaysTime: "9:00 AM – 6:00 PM",
        weekend: "Friday – Saturday",
        weekendTime: "Closed",
      },
      buttons: {
        whatsapp: "WhatsApp",
        email: "Email",
      },
    },
    AR: {
      title: "تواصل معنا",
      subtitle:
        "نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا اليوم ولنبدأ رحلة نجاحك معاً",
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        message: "الرسالة",
        messagePlaceholder: "اكتب رسالتك هنا...",
      },
      contact: {
        title: "معلومات التواصل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        location: "الرياض، المملكة العربية السعودية",
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "الأحد – الخميس",
        weekdaysTime: "9:00 صباحاً – 6:00 مساءً",
        weekend: "الجمعة – السبت",
        weekendTime: "مغلق",
      },
      buttons: {
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
      },
    },
  };

  const currentContent = content[language];

  return (
    <section className="w-full py-32" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">{currentContent.title}</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          {currentContent.subtitle}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:items-start">
        {/* Form Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-6 text-left">
            {currentContent.form.title}
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1 text-sm" htmlFor="name">
                {currentContent.form.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={currentContent.form.namePlaceholder}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400 text-sm"
                dir={isArabic ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-sm" htmlFor="email">
                {currentContent.form.email}
              </label>
              <input
                id="email"
                type="email"
                placeholder={currentContent.form.emailPlaceholder}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400 text-sm"
                dir="ltr"
              />
            </div>
            <div>
              <label
                className="block font-medium mb-1 text-sm"
                htmlFor="message"
              >
                {currentContent.form.message}
              </label>
              <textarea
                id="message"
                placeholder={currentContent.form.messagePlaceholder}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400 text-sm"
                rows={4}
                dir={isArabic ? "rtl" : "ltr"}
              ></textarea>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-0 py-0 h-12 rounded-xl bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition text-base"
                style={{ boxShadow: "0 4px 16px 0 rgba(34, 197, 94, 0.1)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.72 13.06c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
                </svg>
                {currentContent.buttons.whatsapp}
              </a>
              <a
                href="mailto:info@company.com"
                className="flex-1 flex items-center justify-center gap-2 px-0 py-0 h-12 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-base"
                style={{ boxShadow: "0 4px 16px 0 rgba(59, 130, 246, 0.1)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                {currentContent.buttons.email}
              </a>
            </div>
          </form>
        </div>
        {/* Right Side: Buttons, Info, Hours */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">
              {currentContent.contact.title}
            </h4>
            <div className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-lg p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92V19a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">
                  {currentContent.contact.phone}
                </div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-100 text-green-600 rounded-lg p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">
                  {currentContent.contact.email}
                </div>
                <div className="font-medium">info@company.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 rounded-lg p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243" />
                  <path d="M7 7h.01" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">
                  {currentContent.contact.address}
                </div>
                <div className="font-medium">
                  {currentContent.contact.location}
                </div>
              </div>
            </div>
          </div>
          {/* Business Hours Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
            <h4 className="font-bold text-lg mb-2">
              {currentContent.hours.title}
            </h4>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex justify-between">
                <span>{currentContent.hours.weekdays}</span>
                <span>{currentContent.hours.weekdaysTime}</span>
              </div>
              <div className="flex justify-between">
                <span>{currentContent.hours.weekend}</span>
                <span>{currentContent.hours.weekendTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
