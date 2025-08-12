import React, { useEffect, useState } from "react";
import MediaGrid from "../components/MediaGrid";

const Training = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        
        const response = await fetch("/api/media?page=training");
        const data = await response.json();

        
        
        const sortedData = data.sort((a, b) => (a.order || 0) - (b.order || 0));

        setMaterials(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching training materials:", error);
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          Loading training materials...
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-6">
          Training Materials
        </h2>

        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Welcome to our Training Center. Here, you will find essential tutorials,
          demo videos, and screenshots designed to walk you through AMPATH’s core
          systems and tools. Whether you're new to the platform or looking to
          sharpen your skills, these resources are designed to support your
          learning journey.
        </p>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-[#007b83] mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>

              {item.type === "video" ? (
                <video controls className="w-full rounded">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <MediaGrid apiUrl="http://localhost:5000/api/training-media" />
    </section>
  );
};

export default Training;
