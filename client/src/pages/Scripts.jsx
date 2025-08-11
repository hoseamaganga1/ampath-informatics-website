 const tools = [
 {
    title: 'AMPATH Data Extractor',
    description: 'A script to pull patient-level data from the AMPATH system for research and reporting.',
    file: '/downloads/data-extractor.zip',
  },
  {
    title: 'Facility Uploader Script',
    description: 'Automate uploading of health facility details and configurations.',
    file: '/downloads/facility-uploader.js',
  },
  {
    title: 'Patient Tracker Tool',
    description: 'Track patient follow-ups, appointments, and clinical visit history.',
    file: '/downloads/patient-tracker.xlsx',
  },
  {
    title: 'EMR Validator',
    description: 'Validate data entries in the Electronic Medical Records system to reduce human errors.',
    file: '/downloads/emr-validator.py',
  },
  {
    title: 'Backup Scheduler',
    description: 'Simple script to automate daily backups of the database.',
    file: '/downloads/backup-scheduler.sh',
  },
];

const DtoolsnScripts = () => {
  return (
    <section className="w-full bg-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#007b83] mb-4">
          Downloadable Tools & Scripts
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access essential tools and scripts developed for AMPATH informatics, including automation, data validation, extraction, and facility utilities.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#f2fdfd] border border-[#cdecec] rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#007b83] mb-2">{tool.title}</h3>
              <p className="text-gray-700 mb-4">{tool.description}</p>
              <a
                href={tool.file}
                download
                className="inline-block bg-[#007b83] text-white py-2 px-4 rounded hover:bg-[#045f66] transition"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DtoolsnScripts;
