import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

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
  const [videos, setVideos] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch once when app starts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await fetch("http://localhost:5000/api/videos");
        const videosData = await videoRes.json();

        const screenshotRes = await fetch("http://localhost:5000/api/screenshots");
        const screenshotsData = await screenshotRes.json();

        setVideos(videosData);
        setScreenshots(screenshotsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Main" element={<Main videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/Aboutus" element={<Aboutus videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/developers" element={<Developers videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/systemadmins" element={<SystemAdmins videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/qualityassurance" element={<QualityAssurance videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/supportteam" element={<Support videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/attachesninterns" element={<Attaches videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/amrs" element={<AMRS videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/atp" element={<ATP videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/redcap" element={<REDCap videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/projectsinitiatives" element={<Projects videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/training" element={<Training videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/sops" element={<SOPs videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/sysdocumentation" element={<SysDoucumentation videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/downloadablescripts" element={<DtoolsnScripts videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/newsnupdates" element={<NewsnUpdates videos={videos} screenshots={screenshots} loading={loading} />} />
        <Route path="/contactus" element={<ContactUs videos={videos} screenshots={screenshots} loading={loading} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
