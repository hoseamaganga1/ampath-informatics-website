import React, { useState, useEffect } from "react";

const SOPs = () => {
  const [sops, setSops] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch("/api/sops")
      .then((res) => res.json())
      .then((data) => setSops(data));

    fetch("/api/sops/media")
      .then((res) => res.json())
      .then((data) => setMedia(data));
  }, []);
  
  return (
    <section className="w-full bg-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-6">
          SOPs & Guidelines
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Standard Operating Procedures (SOPs) ensure consistent, safe, and efficient use of the AMPATH systems. This section provides easy access to official guidelines, workflows, and learning media for day-to-day system users.
        </p>

        {/* Importance */}
        <div className="bg-gray-50 p-6 rounded-lg shadow mb-12">
          <h3 className="text-2xl font-semibold text-[#007b83] mb-3">Why SOPs Matter</h3>
          <p className="text-gray-700">
            SOPs provide a standardized way of performing system operations. From patient entry to medication dispensing, following documented procedures ensures compliance, reduces errors, and improves care delivery. These documents are regularly updated to reflect system improvements and field feedback.
          </p>
        </div>

        {/* Downloadable SOPs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sops.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 border-l-4 border-[#007b83] rounded-lg hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-[#007b83] mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.file}
                download
                className="inline-block text-white bg-[#007b83] px-4 py-2 rounded hover:bg-[#005f65] transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>

        {/* Media Previews */}
        <h3 className="text-2xl font-semibold text-center text-[#007b83] mb-6">
          Visual SOPs & Walkthroughs
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {media.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-xl transition"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto rounded"
                />
              ) : (
                <video controls className="w-full rounded">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="mt-2 text-center text-sm text-gray-500 italic">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SOPs;
