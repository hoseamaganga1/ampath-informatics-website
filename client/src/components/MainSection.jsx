import React, { useEffect, useState } from 'react';
import  InformaticsSection from './InformaticsSection';
import Footer from './Footer';

const MainSection = () => {
  const messages = [
    {
      title: "Welcome to Our Initiative",
      comment: "Building a better tomorrow with you."
    },
    {
      title: "Empowering communities through innovation",
      comment: "Technology, training & teamwork."
    },
    {
      title: "Advancing progress with impactful solutions",
      comment: "We solve problems that matter."
    },
    {
      title: "Your journey to change starts here",
      comment: "Join us in making an impact."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % messages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] mt-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center align-middle overflow-hidden">
      <video
        // className="absolute top-0 left-0 h-full w-full object-cover"
        className='w-full h-full object-cover scale-[1.15] md:scale-100 overflow-hidden'
        src="/src/assets/Video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{objectFit: "cover" }}
      />
      {/* <VidCar /> */}
      </div>

      
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 sm:p-10 transition-all duration-1000 ease-in-out">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          {messages[currentIndex].title}
        </h1>
        <p className="text-md sm:text-xl">
          {messages[currentIndex].comment}
        </p>
      </div>
      {/* <InformaticsSection /> */}
    </div>
  );
};

export default MainSection;
