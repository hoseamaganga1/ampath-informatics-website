import React, { useEffect } from 'react';
import amrsIcon from '../assets/icons/AMRS.png';
import aptIcon from '../assets/icons/APT.png';
import listIcon from '../assets/icons/list.png';
import sdIcon from '../assets/icons/SD.png';

const informaticsServices = [
  {
    icon: amrsIcon,
    title: "AMRS",
    description: "Driven healthcare-geo de for connected core.",
  },
  {
    icon: aptIcon,
    title: "ATP",
    description: "Enhancing Connection.",
  },
  {
    icon: listIcon,
    title: "REDCap",
    description: "Ensuring protection of digital health records and sensitive information.",
  },
  {
    icon: sdIcon,
    title: "Service Desk",
    description: "Seamless connection of various health platforms, apps, and databases.",
  },
];
// 

const InformaticsSection = () => {
  return (
    <section className="hm-services-0 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {informaticsServices.map((service, index) => (
            <div key={index} className={`hm-services-${index + 1} bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300`} >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformaticsSection;
