// src/DataContext.js
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <DataContext.Provider value={{ videos, screenshots, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
