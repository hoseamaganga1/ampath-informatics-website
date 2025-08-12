import MediaGrid from "../components/MediaGrid";
const SystemAdmins = () => {
  return (
     <div className="p-6 bg-gray-50 min-h-screen">
      {/* Intro / Description */}
      <section className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">System Administrators</h1>
        <p className="text-gray-700 leading-relaxed">
          The System Administration team is responsible for managing, maintaining,
          and optimizing AMPATH Informatics infrastructure. This includes servers,
          databases, network configurations, security, and ensuring systems run
          smoothly for all users. They play a vital role in safeguarding data integrity,
          minimizing downtime, and providing technical support for both developers
          and end users.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Their work ensures that AMPATH systems remain secure, scalable, and
          high-performing — directly supporting the mission of delivering quality
          healthcare through robust information systems.
        </p>
      </section>

      {/* Videos Section */}
      <section className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Training & Overview Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="System Admin Training"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
            title="System Security Overview"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">System Admin Workflows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src="/images/server-dashboard.png"
            alt="Server Dashboard"
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/security-config.png"
            alt="Security Configurations"
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/network-monitoring.png"
            alt="Network Monitoring"
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      <MediaGrid apiUrl="http://localhost:5000/api/system-admin-media" />
    </div>
  );
};

export default SystemAdmins;
