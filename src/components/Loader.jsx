import React from 'react';
import loadingGif from '../assets/ezgif-1-f9eeeff55b.gif'; 

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
    </div>
  );
}

export default Loader;
