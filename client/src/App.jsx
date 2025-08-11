
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

function App() {
  return (
    <Router> 
        <Navbar />
        <Routes>
          <Route path="/Main" element={<Main />} />
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
