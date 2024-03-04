import ad from '../assets/introPicture/ad.svg';
import adActive from '../assets/introPicture/adActive.svg';
import { useState, useEffect } from 'react';

const AdBorad = () => {
  const [currentClock, setCurrentClock] = useState(ad);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClock(prevClock => prevClock === ad ? adActive : ad);
    },500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <img src={currentClock} alt="AdBoard" className="z-10 w-52 h-52  " />
  );
};

export default AdBorad;