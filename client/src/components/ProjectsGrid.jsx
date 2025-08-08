import React from 'react';

const projects = [
  {
    title: 'OpenMRS Customization',
    description: 'Tailoring EMR workflows for HIV, NCDs, maternal health, and chronic care.',
    image: 'https://openmrs.org/wp-content/uploads/2020/08/openmrs-logo-1.png',
  },
  {
    title: 'Pharmacy Dashboard',
    description: 'Real-time drug inventory monitoring and stockout alerts for health facilities.',
    image: 'https://img.icons8.com/color/96/pharmacy-shop.png',
  },
  {
    title: 'PowerBI Analytics',
    description: 'Interactive dashboards for data-driven decisions in clinical services.',
    image: 'https://img.icons8.com/color/96/microsoft-power-bi.png',
  },
  {
    title: 'Digital Triage Tool',
    description: 'Tablet-based emergency prioritization system for faster care delivery.',
    image: 'https://img.icons8.com/color/96/hospital-room.png',
  },
  {
    title: 'Telehealth Integration',
    description: 'Connecting clinicians to patients in rural areas via remote consultations.',
    image: 'https://img.icons8.com/color/96/video-call.png',
  },
  {
    title: 'Mobile Health (mHealth)',
    description: 'SMS and app-based reminders, feedback, and health tips to patients.',
    image: 'https://img.icons8.com/color/96/sms.png',
  },
  {
    title: 'Lab Information System',
    description: 'Digitizing lab workflows for sample tracking and quick result reporting.',
    image: 'https://img.icons8.com/color/96/microscope.png',
  },
  {
    title: 'eLearning for Health Staff',
    description: 'In-house digital modules for continuous learning and capacity building.',
    image: 'https://img.icons8.com/color/96/online-learning.png',
  },
];

const ProjectsGrid = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#2c3e50]">Projects & Initiatives</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-t-4 hover:border-[#007b83]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:rotate-6"
            />
            <h3 className="text-xl font-semibold text-center text-[#007b83]">{project.title}</h3>
            <p className="text-sm text-gray-600 text-center mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
