const materials = [
  {
    type: 'video',
    title: 'Introduction to AMPATH EMR',
    description: 'Overview of the EMR and its core features for clinical staff.',
    src: '/media/training/intro-emr.mp4',
  },
  {
    type: 'video',
    title: 'Patient Registration Tutorial',
    description: 'Learn how to register a new patient step by step.',
    src: '/media/training/patient-registration.mp4',
  },
  {
    type: 'image',
    title: 'Triage Workflow Screenshot',
    description: 'Illustrates the fields and flow used during triage.',
    src: '/media/training/triage-screenshot.png',
  },
  {
    type: 'video',
    title: 'Doctor Module Overview',
    description: 'A walk-through on prescribing and viewing history.',
    src: '/media/training/doctor-module.mp4',
  },
  {
    type: 'image',
    title: 'Lab Request Screenshot',
    description: 'Snapshot showing how to request lab tests.',
    src: '/media/training/lab-request.png',
  },
  {
    type: 'video',
    title: 'Pharmacy Dispensing Demo',
    description: 'Demonstrates dispensing medication using the system.',
    src: '/media/training/pharmacy-dispensing.mp4',
  },
];
 
const Training= () => {
  return (
     <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-6">
          Training Materials
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Welcome to our Training Center. Here, you will find essential tutorials, demo videos, and
          screenshots designed to walk you through AMPATH’s core systems and tools. Whether you're new
          to the platform or looking to sharpen your skills, these resources are designed to support your learning journey.
        </p>

        {/* Grid Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-[#007b83] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              {item.type === 'video' ? (
                <video controls className="w-full rounded">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
