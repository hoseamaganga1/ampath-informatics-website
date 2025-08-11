const newsItems = [
  {
    title: 'AMPATH Launches New Digital Triage App',
    date: 'August 3, 2025',
    description:
      'The Informatics team has deployed a triage app to streamline emergency care across rural clinics.',
    mediaType: 'image',
    mediaSrc: '/media/triage-app-screenshot.jpg',
  },
  {
    title: 'PowerBI Training for Data Officers',
    date: 'July 20, 2025',
    description:
      'Over 60 facility-based data officers underwent PowerBI training to enhance health data analytics.',
    mediaType: 'image',
    mediaSrc: '/media/powerbi-training.jpg',
  },
  {
    title: 'AMPATH Innovation Highlighted in Global Forum',
    date: 'July 12, 2025',
    description:
      'A presentation on AMPATH\'s digital infrastructure and research methods was featured at the Digital Health Summit.',
    mediaType: 'video',
    mediaSrc: '/media/ampath-summit-presentation.mp4',
  },
  {
    title: 'Partnership with Nandi County Launched',
    date: 'June 29, 2025',
    description:
      'Collaboration initiated to provide informatics support tools in public health facilities in rural areas.',
    mediaType: 'image',
    mediaSrc: '/media/nandi-partnership.jpg',
  },
];
const NewsnUpdates = () => {
  return (
    <section className="py-16 bg-[#f9fafa] text-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-12">
          News & Updates
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-48 overflow-hidden">
                {item.mediaType === 'image' ? (
                  <img
                    src={item.mediaSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    src={item.mediaSrc}
                    controls
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-xl font-semibold mt-2 text-[#007b83]">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#007b83] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#05666d] transition duration-300">
            View All Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsnUpdates;
