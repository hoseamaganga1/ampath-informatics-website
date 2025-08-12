import MediaGrid from "../components/MediaGrid";
const Support = () => {
  return (
     <div className=" py-12 bg-white min-h-screen " >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Implementation & Support
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          The Implementation & Support team ensures that systems are deployed
          successfully, meet user needs, and operate smoothly after launch.
          They coordinate with other teams to understand workflows, train end
          users, and provide ongoing technical assistance. Their role is vital
          in ensuring that solutions are functional, user-friendly, and
          sustainable.
        </p>

        {/* Importance */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Importance to the Organization
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Without effective implementation, even the most innovative solutions
          can fail to deliver value. The Implementation & Support team bridges
          the gap between development and daily operations, ensuring that users
          are confident, systems are reliable, and issues are resolved quickly.
          They safeguard the investment in technology and help maximize its
          impact.
        </p>

        {/* Media Showcase */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Showcase: Videos & Screenshots
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <video
              controls
              className="w-full rounded-lg"
              src="/videos/implementation-support-demo.mp4"
            />
            <p className="mt-2 text-gray-700">
              Implementation process overview.
            </p>
          </div>

          {/* Screenshot */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img
              src="/images/support-dashboard.png"
              alt="Support Dashboard"
              className="rounded-lg"
            />
            <p className="mt-2 text-gray-700">
              Support dashboard for tracking tickets.
            </p>
          </div>
        </div>
      </div>
      <MediaGrid apiUrl="http://localhost:5000/api/support-media" />
    </div>
  );
};

export default Support;
