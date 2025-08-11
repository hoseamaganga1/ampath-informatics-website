import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    teams: false,
    systems: false,
    resources: false,
    contact: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="hm-nav w-full shadow-md bg-[#00A36C] text-white py-4 relative z-50 lg:pe-20 h-[10vh]">
      <div className="flex">
        {/* Main Navbar Content */}
        <div className="flex-1 px-6 w-full relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
            <Link to="Main" className="flex items-center space-x-2">  
            <img src="/src/assets/logo2.png" alt="Logo" className="h-10 w-auto" />
            </Link>
            </div>

            {/* Mobile: Search + Hamburger */}
            <div className="flex items-center space-x-4 lg:hidden">
              {/* <img
                src="/src/assets/search2.png"
                alt="Search"
                className="h-6 w-6 cursor-pointer hover:opacity-80"
              /> */}
              <button
                className="text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center justify-center space-x-6 text-white font-medium relative">

              <div className="relative group">
                <Link to="#" className="hover:text-gray-200">TEAMS</Link>
                <div className="absolute left-0 top-full w-max bg-[#f2fdfd] text-[#007b83] shadow-md py-2 px-4 hidden group-hover:block rounded-md space-y-1 z-40">
                  <Link to="/Developers" className=' hover:text-[#77b9ba]'>Developers</Link><br />
                  <Link to="/SystemAdmins" className=' hover:text-[#77b9ba]'>System Admins</Link><br />
                  <Link to="/QualityAssurance" className=' hover:text-[#77b9ba]'>Quality Assurance</Link><br />
                  <Link to="/supportteam" className=' hover:text-[#77b9ba]'>Implementation & Support</Link><br />
                  <Link to="/attachesninterns" className=' hover:text-[#77b9ba]'>Attaches / Interns</Link>
                </div>
              </div>

              <div className="relative group">
                <Link to="#" className="hover:text-gray-200">SYSTEMS</Link>
                <div className="absolute left-0 top-full bg-[#f2fdfd] text-[#007b83] shadow-md py-2 px-4 hidden group-hover:block rounded-md space-y-1 z-40">
                  <Link to="/AMRS" className=' hover:text-[#77b9ba]'>AMRS</Link><br />
                  <Link to="/atp" className=' hover:text-[#77b9ba]'>ATP</Link><br />
                  <Link to="/REDCap" className=' hover:text-[#77b9ba]'>REDCap</Link>
                </div>
              </div>

              <Link to="/projectsinitiatives" className="hover:text-gray-200">PROJECTS & INITIATIVES</Link>

              <div className="relative group">
                <Link to="#" className="hover:text-gray-200">RESOURCES</Link>
                <div className="absolute left-0 top-full w-max bg-[#f2fdfd] text-[#007b83] shadow-md py-2 px-4 hidden group-hover:block rounded-md space-y-1 z-40 w-auto">
                  <Link to="/Training" className=' hover:text-[#77b9ba]'>Training Materials</Link><br />
                  <Link to="/SOPs" className=' hover:text-[#77b9ba]'>SOPs & Guidelines</Link><br />
                  <Link to="/SysDocumentation" className=' hover:text-[#77b9ba]'>System Documentation</Link><br />
                  <Link to="/downloadablescripts" className=' hover:text-[#77b9ba]'>Downloadable Tools & Scripts</Link>
                </div>
              </div>

              <Link to="/NewsnUpdates" className="hover:text-gray-200">NEWS & UPDATES</Link>
              <Link to="/ContactUs" className="hover:text-gray-200">CONTACT US</Link>

              <Link to="/Aboutus" className="hover:text-gray-200">ABOUT US</Link>
              {/* <img
                src="/src/assets/search2.png"
                alt="Search"
                className="h-6 w-6 cursor-pointer hover:opacity-80"
              /> */}
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:block lg:w-1/6"></div> */}
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className=" absolute top-0 left-0 h-screen w-1/3 bg-[#22c78f] z-50 p-6 lg:hidden transition-all duration-300 ease-in-out overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-white font-medium">
            <Link to="/Aboutus" className="hover:text-gray-200">ABOUT US</Link>

            <div>
              <div
                className="cursor-pointer hover:text-gray-200"
                onClick={() => toggleDropdown('teams')}
              >
                TEAMS
              </div>
              {dropdowns.teams && (
                <div className="pl-4 space-y-1 text-sm  bg-[#f2fdfd] text-[#007b83]">
                  <Link to="/Developers"  className=' hover:text-[#77b9ba]'>Developers</Link><br />
                  <Link to="/SystemAdmins"  className=' hover:text-[#77b9ba]'>System Admins</Link><br />
                  <Link to="/QualityAssurance"  className=' hover:text-[#77b9ba]'>Quality Assurance</Link><br />
                  <Link to="/supportteam"  className=' hover:text-[#77b9ba]'>Implementation & Support</Link><br />
                  <Link to="/attachesninterns"  className=' hover:text-[#77b9ba]'>Attaches / Interns</Link>
                </div>
              )}
            </div>

            <div>
              <div
                className="cursor-pointer hover:text-gray-200"
                onClick={() => toggleDropdown('systems')}
              >
                SYSTEMS
              </div>
              {dropdowns.systems && (
                <div className="pl-4 space-y-1 text-sm  bg-[#f2fdfd] text-[#007b83]">
                  <Link to="/AMRS"  className=' hover:text-[#77b9ba]'>AMRS</Link><br />
                  <Link to="/atp"  className=' hover:text-[#77b9ba]'>ATP</Link><br />
                  <Link to="/REDCap"  className=' hover:text-[#77b9ba]'>REDCap</Link>
                </div>
              )}
            </div>

            <Link to="/projectsinitiatives" className="hover:text-gray-200">PROJECTS & INITIATIVES</Link>

            <div>
              <div
                className="cursor-pointer hover:text-gray-200"
                onClick={() => toggleDropdown('resources')}
              >
                RESOURCES
              </div>
              {dropdowns.resources && (
                <div className="pl-4 space-y-1 text-sm  bg-[#f2fdfd] text-[#007b83]">
                  <Link to="/Training"  className=' hover:text-[#77b9ba]'>Training Materials</Link><br />
                  <Link to="/SOPs"  className=' hover:text-[#77b9ba]'>SOPs & Guidelines</Link><br />
                  <Link to="/SysDocumentation"  className=' hover:text-[#77b9ba]'>System Documentation</Link><br />
                  <Link to="/downloadablescripts"  className=' hover:text-[#77b9ba]'>Downloadable Tools & Scripts</Link>
                </div>
              )}
            </div>

            <Link to="/NewsnUpdates" className="hover:text-gray-200">NEWS & UPDATES</Link>
             <Link to="/ContactUs" className="hover:text-gray-200">CONTACT US</Link>

            
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
