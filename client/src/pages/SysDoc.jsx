const media = [
  {
    type: 'image',
    src: '/media/emr-dashboard.png',
    alt: 'AMPATH EMR Dashboard Screenshot',
  },
  {
    type: 'video',
    src: '/media/system-overview.mp4',
    alt: 'AMPATH System Overview',
  },
  {
    type: 'image',
    src: '/media/user-login.png',
    alt: 'User Login Interface',
  },
  {
    type: 'video',
    src: '/media/how-to-generate-report.mp4',
    alt: 'Generating Reports in AMPATH',
  },
];

const SysDoucumentation = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-6">
          System Documentation
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          This section provides an overview of AMPATH systems, detailed documentation on how different modules work, supported workflows, and multimedia references for hands-on understanding.
        </p>

        {/* Importance and Functions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-[#007b83] hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#007b83] mb-3">Why Documentation Matters</h3>
            <p className="text-gray-700 leading-relaxed">
              System documentation helps users and developers understand how the AMPATH systems operate. It offers clarity, consistency, and ensures continuity in operations. Whether onboarding new staff or reviewing system upgrades, clear documentation reduces errors and ensures efficient usage.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-[#007b83] hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#007b83] mb-3">Core Functions Covered</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Patient registration & triage workflows</li>
              <li>Clinical encounter recording & charting</li>
              <li>Laboratory and pharmacy integration</li>
              <li>Reporting and analytics dashboard usage</li>
              <li>User management, data backup, and access control</li>
            </ul>
          </div>
        </div>

        {/* Media Section */}
        <h3 className="text-2xl font-semibold text-center text-[#007b83] mb-6">
          Video Tutorials & System Screenshots
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {media.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 rounded-lg hover:shadow-xl transition"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto rounded object-cover"
                />
              ) : (
                <video
                  controls
                  className="w-full rounded"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="mt-3 text-gray-600 text-sm text-center italic">
                {item.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SysDoucumentation;
