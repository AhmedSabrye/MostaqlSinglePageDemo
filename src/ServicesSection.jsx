import React from "react";
import { useLanguage } from "./App";
import {
  FaLaptopCode,
  FaPalette,
  FaUserAlt,
  FaChartLine,
  FaUserTag,
  FaPhone,
} from "react-icons/fa";

export default function ServicesSection() {
  const { language, isArabic } = useLanguage();

  const content = {
    EN: {
      title: "Our Services",
      services: [
        {
          title: "Web Development",
          description:
            "Custom websites built with the latest technologies to deliver exceptional user experiences.",
        },
        {
          title: "Creative Design",
          description:
            "Stunning visual designs that capture your brand's essence and engage your audience.",
        },
        {
          title: "UI/UX Design",
          description:
            "User-centered design that creates intuitive, efficient, and enjoyable digital experiences.",
        },
        {
          title: "Analytics & SEO",
          description:
            "Data-driven strategies to improve visibility and drive meaningful traffic to your site.",
        },
        {
          title: "Brand Identity",
          description:
            "Comprehensive branding solutions that help you stand out in a competitive market.",
        },
        {
          title: "24/7 Support",
          description:
            "Dedicated support team ready to assist you with any issues or questions.",
        },
      ],
    },
    AR: {
      title: "خدماتنا",
      services: [
        {
          title: "تطوير المواقع",
          description:
            "مواقع مخصصة مبنية بأحدث التقنيات لتقديم تجارب استثنائية للمستخدمين.",
        },
        {
          title: "التصميم الإبداعي",
          description:
            "تصاميم بصرية مذهلة تلتقط جوهر علامتك التجارية وتشرك جمهورك.",
        },
        {
          title: "تصميم واجهات المستخدم",
          description:
            "تصميم محوره المستخدم ينشئ تجارب رقمية بديهية وفعالة وممتعة.",
        },
        {
          title: "التحليلات وتحسين محركات البحث",
          description:
            "استراتيجيات مبنية على البيانات لتحسين الرؤية وجذب زيارات هادفة لموقعك.",
        },
        {
          title: "الهوية التجارية",
          description:
            "حلول علامة تجارية شاملة تساعدك على التميز في السوق التنافسي.",
        },
        {
          title: "دعم على مدار الساعة",
          description: "فريق دعم مخصص جاهز لمساعدتك في أي مشاكل أو استفسارات.",
        },
      ],
    },
  };

  const currentContent = content[language];
  const icons = [
    <FaLaptopCode />,
    <FaPalette />,
    <FaUserAlt />,
    <FaChartLine />,
    <FaUserTag />,
    <FaPhone />,
  ];
  return (
    <section className="text-center py-16" id="services">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
        {currentContent.title}
      </h2>
      <div className="flex w-full overflow-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-4 hide-scrollbar">
        {currentContent.services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center transition hover:shadow-lg min-w-80 sm:min-w-auto"
          >
            <span className="text-4xl text-[#44b3b8] mb-4">{icons[index]}</span>
            <h3 className="font-bold text-xl mb-2 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
