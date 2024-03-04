import dressing from '../assets/introPicture/dressing.svg';
import dressingActive from '../assets/introPicture/dressingActive.svg';
import { useState, useEffect } from 'react';

const Dressing = () => {
  const [currentClock, setCurrentClock] = useState(dressing);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClock(prevClock => prevClock === dressing ? dressingActive : dressing);
    },500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <img src={currentClock} alt="AdBoard" className="z-10 w-28 h-28  " />
  );
};

export default Dressing;