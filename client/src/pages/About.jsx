const Aboutus = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#2c3e50]">About Us</h1>

      <section className="mb-10">
        <p className="text-lg mb-4">
          Welcome to the <strong>AMPATH Informatics Hub</strong> – your gateway to understanding, exploring, and engaging with
          the digital systems and data-driven processes that power healthcare delivery within the AMPATH model.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Our Role</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Demystify the AMPATH informatics ecosystem from registration to reporting.</li>
          <li>Document digital workflows used in daily healthcare operations.</li>
          <li>Provide tutorials and documentation for trainees, staff, and partners.</li>
          <li>Bridge the gap between healthcare workers and IT systems.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Why Informatics Matters at AMPATH</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Track patient data across care points for better outcomes.</li>
          <li>Support clinical decisions with accurate, accessible information.</li>
          <li>Enhance communication across departments.</li>
          <li>Improve resource and supply management with data insights.</li>
          <li>Enable impactful research and global knowledge sharing.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Our Vision</h2>
        <blockquote className="italic border-l-4 border-[#77b9ba] pl-4 text-gray-700">
          To make AMPATH’s informatics systems transparent, learnable, and replicable, so that health workers, students, and
          partners can confidently understand and contribute to our digital transformation journey.
        </blockquote>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> How Our Tutorials and Videos Help</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Step-by-step tutorials and walkthroughs of AMPATH’s systems.</li>
          <li>How to use tools like OpenMRS, Lab systems, Pharmacy dashboards, and PowerBI.</li>
          <li>Best practices in data entry, reporting, and analytics.</li>
          <li>Support for onboarding, system use, and continuous learning.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Who This Website is For</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>AMPATH staff and new employees needing orientation.</li>
          <li>Students and interns learning health informatics in practice.</li>
          <li>Partners exploring AMPATH’s tech-driven model.</li>
          <li>Developers and engineers building or integrating healthcare tools.</li>
          <li>Funders and policymakers assessing system-based care delivery.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Get Involved</h2>
        <p className="text-lg">
          This platform is living and growing. We welcome your feedback and collaboration. Whether you are a part of AMPATH or
          an external stakeholder, you are invited to explore, engage, and innovate with us.
        </p>
      </section>
    </div>
  );
};

export default Aboutus;
