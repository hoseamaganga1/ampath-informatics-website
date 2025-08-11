const AMRS = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        AMRS (AMPATH Medical Record System)
      </h1>

      {/* Introduction / Description */}
      <p className="text-gray-700 mb-4">
        The AMPATH Medical Record System (AMRS) is an electronic health
        management platform designed to store, manage, and retrieve patient
        records efficiently. It enables clinicians and healthcare providers to
        access real-time patient information, improving the quality and
        continuity of care.
      </p>

      {/* How it Works */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        How It Works
      </h2>
      <p className="text-gray-700 mb-4">
        AMRS works by storing patient demographic, clinical, and treatment data
        in a central database. Authorized healthcare workers can log in to the
        system, search for patients, update medical records, track lab results,
        and record prescriptions. The system supports both online and offline
        modes, ensuring continuity even in low-connectivity areas.
      </p>

      {/* Processes Involved */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        Processes Involved
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Patient registration and identification</li>
        <li>Clinical documentation and visit recording</li>
        <li>Lab test ordering and results entry</li>
        <li>Pharmacy dispensing and prescription tracking</li>
        <li>Reporting and analytics for decision-making</li>
      </ul>

      {/* Importance */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        Importance
      </h2>
      <p className="text-gray-700 mb-4">
        AMRS enhances the efficiency of healthcare delivery by ensuring that
        patient information is always available and up to date. It improves
        accuracy, reduces paperwork, supports clinical decision-making, and
        enables large-scale health data analysis for policy and planning.
      </p>

      {/* How It Supports Other Systems */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        How It Supports Other Systems
      </h2>
      <p className="text-gray-700 mb-4">
        AMRS integrates with laboratory, pharmacy, and reporting systems to
        provide a seamless flow of patient data. This integration allows
        different departments to work with the same patient records, reducing
        duplication and improving collaboration across the organization.
      </p>

      {/* Screenshots and Videos */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Screenshots & Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg shadow p-4">
            <img
              src="/images/amrs-screenshot1.png"
              alt="AMRS Screenshot"
              className="rounded-lg w-full"
            />
          </div>
          <div className="bg-white border rounded-lg shadow p-4">
            <video controls className="rounded-lg w-full">
              <source src="/videos/amrs-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRS;
