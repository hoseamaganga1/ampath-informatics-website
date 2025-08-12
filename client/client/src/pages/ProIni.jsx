import ProjectsGrid from "../components/ProjectsGrid";
import MediaGrid from "../components/MediaGrid";

const projectsinitiatives= () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#2c3e50]">Projects & Initiatives</h1>

      <section className="mb-10">
        <p className="text-lg mb-4">
          The <strong>AMPATH Informatics Unit</strong> drives a wide array of health information technology (HIT) projects and digital transformation initiatives that enhance healthcare service delivery, data use, research, and decision-making across the AMPATH network.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Digital Health Projects</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>
            <strong>OpenMRS Customization:</strong> Custom electronic medical record workflows for HIV care, maternal health, chronic disease management, and more.
          </li>
          <li>
            <strong>Laboratory Information Systems:</strong> Integration of digital lab result tracking and automated sample workflows.
          </li>
          <li>
            <strong>Pharmacy Dashboard:</strong> Inventory control and real-time medication dispensing analytics to reduce stockouts.
          </li>
          <li>
            <strong>PowerBI Dashboards:</strong> Visual analytics for clinical, administrative, and supply chain performance.
          </li>
          <li>
            <strong>Digital Triage Tools:</strong> Tablet-based systems for patient pre-screening and emergency prioritization.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Current Innovations</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>
            <strong>Telehealth Integration:</strong> Supporting remote consultations and follow-up for rural patients using digital platforms.
          </li>
          <li>
            <strong>eLearning for Clinicians:</strong> Online learning modules hosted within the informatics portal for clinical staff training.
          </li>
          <li>
            <strong>Data Harmonization Initiative:</strong> Aligning community and facility data for consistent public health insights.
          </li>
          <li>
            <strong>Mobile Health (mHealth):</strong> SMS and app-based engagement for patient reminders, surveys, and health education.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Collaborations & Partnerships</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>
            Working with <strong>international universities</strong> and tech teams to build scalable informatics tools.
          </li>
          <li>
            Collaborating with <strong>Kenya’s Ministry of Health</strong> on standards-based reporting (e.g., KHIS).
          </li>
          <li>
            Aligning with <strong>OpenMRS Global Community</strong> for shared learning and development.
          </li>
          <li>
            Supporting <strong>implementation research</strong> in informatics-driven healthcare delivery.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Impact and Value</h2>
        <p className="text-base mb-4">
          Our informatics projects empower frontline healthcare workers with the tools they need to deliver care efficiently and safely.
          The data collected through these systems feeds into critical research, national health policy, and service improvement.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduced manual errors and duplication of records.</li>
          <li>Faster decision-making through accessible digital records.</li>
          <li>Improved patient outcomes through systematized care pathways.</li>
          <li>Increased transparency and accountability in resource usage.</li>
        </ul>
      </section>
      <ProjectsGrid />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-[#77b9ba]"> Explore More</h2>
        <p className="text-base">
          Visit our <a href="/tutorials" className="text-blue-600 underline">Tutorials</a> section to learn how these systems work and how you can interact with them—whether you're a student, researcher, developer, or a healthcare professional.
        </p>
      </section>
      <MediaGrid apiUrl="http://localhost:5000/api/projects-media" />
    </div>
  );
};

export default projectsinitiatives;
