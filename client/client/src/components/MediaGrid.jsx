import React, { useEffect, useState } from 'react';

const MediaGrid = ({ apiUrl = '/api/media' }) => {
  const [media, setMedia] = useState({ videos: [], screenshots: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted) {
          setMedia({
            videos: data.videos || [],
            screenshots: data.screenshots || []
          });
        }
      } catch (err) {
        console.warn('Media fetch failed:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [apiUrl]);

  const renderVideos = () =>
    media.videos.map((v, i) => (
      <div key={i} className="rounded overflow-hidden shadow-sm">
        <video src={v.url} controls className="w-full h-40 object-cover" />
      </div>
    ));

  const renderScreenshots = () =>
    media.screenshots.map((s, i) => (
      <div key={i} className="rounded overflow-hidden shadow-sm">
        <img src={s.url} alt={s.name || `Screenshot ${i}`} className="w-full h-40 object-cover" />
      </div>
    ));

  return (
    <section className="p-6 bg-white rounded-lg shadow mt-8">
      <h3 className="text-xl font-semibold mb-4">Media</h3>

      {loading && <p className="text-gray-500">Loading media...</p>}
      {!loading && media.videos.length === 0 && media.screenshots.length === 0 && (
        <p className="text-gray-400 italic">Media will appear here when backend is running.</p>
      )}

      {media.videos.length > 0 && (
        <>
          <h4 className="mb-2 font-medium">Videos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderVideos()}
          </div>
        </>
      )}

      {media.screenshots.length > 0 && (
        <>
          <h4 className="mt-6 mb-2 font-medium">Screenshots</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderScreenshots()}
          </div>
        </>
      )}
    </section>
  );
};

export default MediaGrid;
