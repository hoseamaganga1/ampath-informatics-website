
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import Aboutus from './pages/About';
import Developers from './pages/Dev';
import SystemAdmins from './pages/SysA';
import QualityAssurance from './pages/QuaA';
import Support from './pages/ImpSUp';
import Attaches from './pages/AttaInt';
import AMRS from './pages/Amrs';
import ATP from './pages/Atp';
import REDCap from './pages/Redcap';
import Projects from './pages/ProIni';
import Training from './pages/Train';
import SOPs from './pages/Sops';
import SysDoucumentation from './pages/SysDoc';
import DtoolsnScripts from './pages/Scripts';
import NewsnUpdates from './pages/News';
import ContactUs from './pages/Contact';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      if (window.ScrollReveal) {
        window.ScrollReveal().reveal('.hm-nav', {origin:'top', distance:'70px', delay: 0, easing: 'ease-in-out', opacity:0 });
        // window.ScrollReveal().reveal('.hm-mobile-sidebar', {origin:'left', distance:'70px', delay: 3000, duration: 700, easing: 'ease-in-out' });
        // 
        window.ScrollReveal().reveal('.hm-services-1', {origin:'left', distance:'500px', delay: 100, duration: 1000, easing: 'ease-in-out' });
        window.ScrollReveal().reveal('.hm-services-2', {origin:'left', distance:'500px', delay: 0, duration: 1000, easing: 'ease-in-out' });
        window.ScrollReveal().reveal('.hm-services-3', {origin:'right', distance:'500px', delay: 0, duration: 1000, easing: 'ease-in-out' });
        window.ScrollReveal().reveal('.hm-services-4', {origin:'right', distance:'500px', delay: 100, duration: 1000, easing: 'ease-in-out' });

        //  footer
        // window.ScrollReveal().reveal('.hm-footer', {opacity:0.9, origin:'bottom', distance:'0px', delay: 100, duration: 700, easing: 'ease-in-out' });
      }
    }, []);

    return (
    <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/systemadmins" element={<SystemAdmins />} />
          <Route path="/qualityassurance" element={<QualityAssurance />} />
          <Route path="/supportteam" element={<Support />} />
          <Route path="/attachesninterns" element={<Attaches />} />
          <Route path="/amrs" element={<AMRS />} />
          <Route path="/atp" element={<ATP />} />
          <Route path="/redcap" element={<REDCap />} />
          <Route path="/projectsinitiatives" element={<Projects />} />
          <Route path="/training" element={<Training />} />
          <Route path="/sops" element={<SOPs />} />
          <Route path="/sysdocumentation" element={<SysDoucumentation />} />
          <Route path="/downloadablescripts" element={<DtoolsnScripts />} />
          <Route path="/newsnupdates" element={<NewsnUpdates />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
