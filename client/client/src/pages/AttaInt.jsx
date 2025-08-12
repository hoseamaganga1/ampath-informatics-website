import MediaGrid from "../components/MediaGrid";
const Attaches = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Attaches & Interns</h1>

      {/* Description Section */}
      <p className="text-lg text-gray-700 mb-6">
        Our attaches and interns bring fresh perspectives and innovative ideas to the 
        AMPATH Informatics team. They work closely with experienced professionals, 
        contributing to various projects and gaining valuable hands-on experience in 
        healthcare informatics. Their contributions often help accelerate progress 
        and introduce modern approaches to problem-solving.
      </p>

      {/* Importance Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Importance to the Organisation</h2>
      <p className="text-gray-700 mb-6">
        Interns and attaches play a crucial role in bridging the gap between academic 
        learning and professional application. They support ongoing projects, learn 
        industry best practices, and often grow into future leaders within the organisation.
      </p>

      {/* Screenshots Showcase */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Screenshots Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img src="/screenshots/intern1.png" alt="Intern Project 1" className="rounded shadow" />
        <img src="/screenshots/intern2.png" alt="Intern Project 2" className="rounded shadow" />
        <img src="/screenshots/intern3.png" alt="Intern Project 3" className="rounded shadow" />
      </div>

      {/* Video Showcase */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Video Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <video controls className="w-full rounded shadow">
          <source src="/videos/intern_demo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className="w-full rounded shadow">
          <source src="/videos/intern_demo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <MediaGrid apiUrl="http://localhost:5000/api/attaches-media" />
    </div>
  );
};

export default Attaches;
