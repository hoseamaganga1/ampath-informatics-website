const redcapResources = [
  {
    type: 'video',
    title: 'Introduction to REDCap',
    description: 'A basic overview of REDCap and how it’s used for clinical research data capture.',
    src: '/media/redcap/intro-redcap.mp4',
  },
  {
    type: 'video',
    title: 'Creating a New Project in REDCap',
    description: 'Step-by-step tutorial on how to create and set up a new research project.',
    src: '/media/redcap/create-project.mp4',
  },
  {
    type: 'image',
    title: 'Instrument Designer Interface',
    description: 'Screenshot showing the drag-and-drop interface for designing data entry forms.',
    src: '/media/redcap/designer-screenshot.png',
  },
  {
    type: 'video',
    title: 'Data Entry & Validation in REDCap',
    description: 'Learn how to enter and validate clinical data in real-time.',
    src: '/media/redcap/data-entry.mp4',
  },
  {
    type: 'image',
    title: 'Project Dashboard Screenshot',
    description: 'Visual of the main REDCap dashboard after logging in.',
    src: '/media/redcap/dashboard.png',
  },
  {
    type: 'video',
    title: 'Exporting Data from REDCap',
    description: 'How to export datasets securely for analysis.',
    src: '/media/redcap/data-export.mp4',
  },
];

const REDCap = () => {
  return (
     <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#c62828] mb-6">
          REDCap System Overview
        </h2>

        {/* Intro paragraph */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          REDCap (Research Electronic Data Capture) is a secure web application for building and managing online surveys and databases. It is especially useful in clinical research and operational data collection. Below are training videos, screenshots, and workflows designed to help you understand and use REDCap efficiently within AMPATH and beyond.
        </p>
        
        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {redcapResources.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-[#b71c1c] mb-2">{item.title}</h4>
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

export default REDCap;
