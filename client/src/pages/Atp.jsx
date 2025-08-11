
const ATP = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">ATP Systems</h1>

      {/* Intro / Description */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Introduction & Description</h2>
        <p className="text-gray-600 leading-relaxed">
          The Automated Teller Processing (ATP) System is designed to streamline
          and secure transactions, ensuring accuracy, speed, and reliability in
          financial or data-related operations. It integrates with various
          platforms to automate repetitive tasks, minimize errors, and maintain
          compliance.
        </p>
      </section>

      {/* How it Works */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">How It Works</h2>
        <p className="text-gray-600 leading-relaxed">
          ATP systems function by collecting transaction requests, verifying
          credentials, processing the data, and updating connected databases in
          real-time. This ensures smooth operations without manual intervention,
          with detailed logs for accountability.
        </p>
      </section>

      {/* Processes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Processes</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Data validation and verification.</li>
          <li>Automated transaction routing.</li>
          <li>Error detection and correction.</li>
          <li>Logging and report generation.</li>
          <li>Integration with third-party systems.</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Importance</h2>
        <p className="text-gray-600 leading-relaxed">
          ATP systems are critical in ensuring efficiency, accuracy, and security
          in transaction-heavy environments. They reduce human error, speed up
          workflows, and provide reliable audit trails, which are essential for
          compliance and trust.
        </p>
      </section>

      {/* How it Supports Said Systems */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">How it Supports Other Systems</h2>
        <p className="text-gray-600 leading-relaxed">
          ATP integrates seamlessly with accounting, ERP, and banking platforms
          to provide a backbone for secure and efficient transaction handling.
          It also supports analytics systems by supplying accurate, real-time
          transaction data.
        </p>
      </section>

      {/* Videos */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.youtube.com/embed/example1"
            title="ATP Overview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.youtube.com/embed/example2"
            title="ATP Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Screenshots */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/atp-screenshot1.png"
            alt="ATP Screenshot 1"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <img
            src="/images/atp-screenshot2.png"
            alt="ATP Screenshot 2"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <img
            src="/images/atp-screenshot3.png"
            alt="ATP Screenshot 3"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default ATP;
