import MediaGrid from "../components/MediaGrid";
const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      

      <main className="flex-grow px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#004e64] mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">AMPATH Kenya Office</h2>
            <p><strong>Address:</strong> P.O. Box 4606, Eldoret, Kenya 30100</p>
            <p><strong>Phone:</strong> +254 532‑033‑471</p>
            <p><strong>Email:</strong> info@ampathkenya.org</p>
            <p><strong>Medical Help:</strong> +254 706‑390‑391 | cco@mtrh.go.ke</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">AMPATH Consortium (USA)</h2>
            <p><strong>Address:</strong> 702 Rotary Circle, Suite RO 101, Indianapolis, IN 46202</p>
            <p><strong>Phone:</strong> +1 317‑278‑0829</p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
              <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-[#004e64] text-white px-6 py-2 rounded hover:bg-[#006f85]">Send</button>
            </form>
          </div>
          
        </div>
      </main>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#004e64] mb-4">Our Location</h2>
          <div className="w-full h-96 border rounded overflow-hidden">
            <iframe
              title="AMPATH Kenya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127692.07065332568!2d35.222110099999996!3d0.5142770500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780f1ff63e0f371%3A0x8015d7f48900f9b0!2sAMPATH%20Centre!5e0!3m2!1sen!2ske!4v1691945858437!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      <MediaGrid apiUrl="http://localhost:5000/api/contact-media" />
    </div>
  );
};

export default ContactUs;
