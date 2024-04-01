import React, { useState, useEffect } from 'react';
import Banner1 from '../img/banner-1.jpg';
import Banner2 from '../img/banner-2.jpg';

function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(Banner1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between the images
      setCurrentBanner(prevBanner => prevBanner === Banner1 ? Banner2 : Banner1);
    }, 3000);

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <img src={currentBanner} alt="" />
    </div>
  );
}

export default HeroSection;
