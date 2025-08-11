import React from 'react';

const Footer = () => (
  <footer className="hm-footer bg-gray-800 text-gray-200 py-12">
    <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Contact Info */}
      <div>
        <h4 className="text-white font-semibold mb-4">AMPATH Kenya</h4>
        <p>P.O. Box 4606<br />Eldoret, Kenya 30100</p>
        <p>Phone: +254 532‑033‑471<br />Fax: +254 532‑060‑727</p>
        <p>Email: <a href="mailto:info@ampathkenya.org" className="underline">info@ampathkenya.org</a></p>
        <p>Medical Assistance: +254 706‑390‑391 / +254 732‑018‑387</p>
      </div>

      {/* Navigation Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['ABOUT US', 'TEAMS', 'SYSTEMS', 'PROJECTS & INITIATIVES', 'RESOURCES', 'NEWS & UPDATES', 'CONTACT US'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

     {/* Newsletter Subscription Section */}
      <div className=" mt-12 text-center">
        <h4 className="text-white text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
        <p className="text-gray-400 mb-4">Get updates on our programs, research, and impact in your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 w-full sm:w-96 rounded-lg text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition"
          >
            Subscribe
          </button>
        </form>
      </div>


    </div>

    {/* Newsletter or Social Section (optional) */}
    <div className=" mt-12 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} AMPATH Kenya. All rights reserved.</p>
      <p>
        <a href="/subscribe" className="hover:underline">Subscribe to our Newsletter</a> |{' '}
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </p>
    </div>
  </footer>
);

export default Footer;
