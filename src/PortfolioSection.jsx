import React from "react";
import { useLanguage } from "./App";

export default function PortfolioSection() {
  const { language, isArabic } = useLanguage();

  const content = {
    EN: {
      title: "Our Portfolio",
      subtitle:
        "Explore our outstanding work that reflects our expertise and creativity",
      viewMore: "View More Projects",
      projects: [
        {
          category: "Web Development",
          title: "E-Commerce Platform",
          description: "Modern e-commerce solution with advanced features",
          tags: ["React", "Node.js", "MongoDB"],
        },
        {
          category: "Mobile App",
          title: "Banking Application",
          description: "Secure mobile banking with biometric authentication",
          tags: ["React Native", "Firebase", "Security"],
        },
        {
          category: "UI/UX Design",
          title: "Brand Identity",
          description: "Complete brand identity package and guidelines",
          tags: ["Branding", "Logo", "Guidelines"],
        },
        {
          category: "Data Analytics",
          title: "AI Dashboard",
          description: "Analytics dashboard with AI-powered insights",
          tags: ["AI", "Analytics", "Dashboard"],
        },
        {
          category: "Web Design",
          title: "Restaurant Website",
          description: "Elegant website with online reservation system",
          tags: ["WordPress", "Booking", "Menu"],
        },
        {
          category: "Mobile App",
          title: "Fitness Tracker",
          description: "Comprehensive fitness tracking and monitoring",
          tags: ["Flutter", "Health", "Tracking"],
        },
      ],
    },
    AR: {
      title: "معرض أعمالنا",
      subtitle: "استكشف أعمالنا المتميزة التي تعكس خبرتنا وإبداعنا",
      viewMore: "عرض المزيد من المشاريع",
      projects: [
        {
          category: "تطوير مواقع",
          title: "منصة تجارة إلكترونية",
          description: "حلول تجارة إلكترونية حديثة مع مميزات متقدمة",
          tags: ["React", "Node.js", "MongoDB"],
        },
        {
          category: "تطبيق جوال",
          title: "تطبيق مصرفي",
          description: "تطبيق مصرفي آمن مع المصادقة البيومترية",
          tags: ["React Native", "Firebase", "الأمان"],
        },
        {
          category: "تصميم واجهات",
          title: "هوية بصرية",
          description: "حزمة هوية بصرية كاملة مع الإرشادات",
          tags: ["العلامة التجارية", "الشعار", "الإرشادات"],
        },
        {
          category: "تحليل البيانات",
          title: "لوحة معلومات ذكية",
          description: "لوحة تحليلات مع رؤى مدعومة بالذكاء الاصطناعي",
          tags: ["ذكاء اصطناعي", "تحليلات", "لوحة معلومات"],
        },
        {
          category: "تصميم مواقع",
          title: "موقع مطعم",
          description: "موقع أنيق مع نظام حجز عبر الإنترنت",
          tags: ["WordPress", "الحجز", "القائمة"],
        },
        {
          category: "تطبيق جوال",
          title: "متتبع اللياقة",
          description: "تتبع شامل للياقة البدنية والمراقبة",
          tags: ["Flutter", "الصحة", "التتبع"],
        },
      ],
    },
  };

  const currentContent = content[language];
  const iamges = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcnn-arabic-images.cnn.io%2Fcloudinary%2Fimage%2Fupload%2Fw_1920%2Cc_scale%2Cq_auto%2Fcnnarabic%2F2020%2F09%2F15%2Fimages%2F165124.jpg&f=1&nofb=1&ipt=f62973dfc5a0e65c9987dbf3cb5ad5f31ca967325f1c8e7bf7cb6a2c9a6245df",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fduchessdani.com%2Fwp-content%2Fuploads%2F2025%2F04%2F%25D8%25A8%25D9%2588%25D8%25A7%25D8%25A8%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25AF%25D8%25B1%25D8%25B9%25D9%258A%25D8%25A9.png&f=1&nofb=1&ipt=956cff8513d19ca7a5be5ae990110d8ceb759f101272754f41455487dcdab20d",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Far.timeoutriyadh.com%2Fcloud%2Fartimeoutriyadh%2F2022%2F12%2F04%2FBKlPaFBX-image-1-800x600.png&f=1&nofb=1&ipt=b1241289f3ee1453cf641e6f0190e677d4bb6aec02c999dcc38df928a5a1031a",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.almrsal.com%2Fwp-content%2Fuploads%2F2024%2F08%2F%25D9%2585%25D8%25B4%25D8%25B1%25D9%2588%25D8%25B9-%25D8%25A8%25D9%2588%25D8%25A7%25D8%25A8%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25AF%25D8%25B1%25D8%25B9%25D9%258A%25D8%25A9.jpg&f=1&nofb=1&ipt=5f0b1463d91bab87263159a659ad0206cf2369869f264bf5ddd3b2a7ff22b9ec",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd22g8xv6j3zp9r.cloudfront.net%2Fc4ce250bd789421b9f17f7f9bf3e224a%3Fwidth%3D3840%26quality%3D80%26transform%3Dtrue%26format%3Dwebp&f=1&nofb=1&ipt=29bd38c6b3a43d0901da82489f238cb58095dd45f742bef57c025be27f50593d",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fatakat-a.com%2Fwp-content%2Fuploads%2Fbddd7e27ae.jpg&f=1&nofb=1&ipt=08d11360cd901b04136ac1caa0533e65ccfc833ec85cb7559aa83007d96f5cd3",
  ];
  return (
    <section className="py-20 bg-gradient-to-br " id="portfolio">
      <div className=" sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex  overflow-auto md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-6 hide-scrollbar">
          {currentContent.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden sm:overflow-visible min-w-80 lg:min-w-0 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <img
                  src={iamges[index]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full mb-3">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          {/* <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {currentContent.viewMore}
          </button> */}
        </div>
      </div>
    </section>
  );
}
