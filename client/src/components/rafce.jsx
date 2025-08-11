import React, { useEffect } from 'react';

export default function Rafce() {
  useEffect(() => {
    if (window.ScrollReveal) {
      window.ScrollReveal().reveal('.hm-nav', { delay: 3000 });
    }
  }, []);

  return (
    <div className='hm-nav'>
      <h1>Hello, this is a new component!</h1>
    </div>
  );
}

// ScrollReveal is now initialized in the component using useEffect.