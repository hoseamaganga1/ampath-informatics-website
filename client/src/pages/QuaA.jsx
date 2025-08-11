const QualityAssurance = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Quality Assurance Team
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          The Quality Assurance (QA) team ensures that all systems, applications,
          and processes at AMPATH Informatics meet the highest standards of
          reliability, security, and performance.  
          They rigorously test new features, validate bug fixes, and maintain
          documentation for quality control processes.  
          QA plays a crucial role in ensuring that our products are not only
          functional but also user-friendly and safe for use in healthcare
          environments.  
        </p>

        {/* Importance */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Importance to the Organization
          </h3>
          <p className="text-gray-600">
            Quality Assurance safeguards AMPATH’s mission by preventing
            costly errors, maintaining compliance with healthcare regulations,
            and ensuring trust among patients, clinicians, and partners.  
            Their work helps minimize downtime, improves user satisfaction,
            and guarantees that our systems perform optimally in critical
            healthcare workflows.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            QA Process Overview Video
          </h3>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-96 rounded-lg shadow"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Quality Assurance Overview"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-500 text-sm">
            This video provides an overview of the testing processes and tools
            used by the QA team at AMPATH Informatics.
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            QA Workflow Screenshots
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/images/qa-step1.png"
              alt="QA Step 1"
              className="rounded-lg shadow"
            />
            <img
              src="/images/qa-step2.png"
              alt="QA Step 2"
              className="rounded-lg shadow"
            />
            <img
              src="/images/qa-step3.png"
              alt="QA Step 3"
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
