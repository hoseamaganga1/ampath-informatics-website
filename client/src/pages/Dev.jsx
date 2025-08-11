const Developers = () => {
  // Example developer profiles
  const team = [
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      image: "/images/dev1.jpg",
      description: "Specializes in building responsive and accessible user interfaces."
    },
    {
      name: "John Smith",
      role: "Backend Developer",
      image: "/images/dev2.jpg",
      description: "Expert in Node.js, database optimization, and API integrations."
    },
    {
      name: "Emily Johnson",
      role: "Full-Stack Engineer",
      image: "/images/dev3.jpg",
      description: "Works on both frontend and backend, ensuring seamless functionality."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 min-h-screen">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Developers</h1>
        <p className="text-lg text-gray-600 mt-4">
          Meet the team behind AMPATH Informatics — the innovators who design,
          build, and maintain our digital systems, ensuring smooth operation
          across all departments.
        </p>
      </div>

      {/* What We Do */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What We Do</h2>
        <p className="text-gray-700 leading-relaxed">
          The Developers Team is responsible for creating, improving, and
          maintaining all custom software solutions at AMPATH. They work on
          projects ranging from patient management systems and laboratory
          tools, to research databases and public health dashboards. Our team
          ensures all platforms are secure, user-friendly, and tailored to
          organizational needs.
        </p>
      </div>

      {/* Importance */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Importance to AMPATH
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Without the developers, our critical systems would not exist or
          function optimally. Their expertise in programming, UI/UX design,
          database management, and integration allows the organization to
          deliver efficient, secure, and innovative healthcare services at
          scale.
        </p>
      </div>

      {/* Example image + video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src="/images/sample-system.png"
            alt="System Screenshot"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-700">
              Example screenshot of the patient dashboard interface.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <video controls className="w-full h-48 object-cover">
            <source src="/videos/sample-demo.mp4" type="video/mp4" />
          </video>
          <div className="p-4">
            <p className="text-gray-700">
              Short demo of the appointment booking system.
            </p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((dev, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{dev.name}</h3>
              <p className="text-sm text-gray-500">{dev.role}</p>
              <p className="mt-2 text-gray-700">{dev.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
