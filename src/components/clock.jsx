import clock from '../assets/introPicture/clock.svg';
import clock2 from '../assets/introPicture/clock2.svg';
import { useState, useEffect } from 'react';

const Clock = () => {
  const [currentClock, setCurrentClock] = useState(clock);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClock(prevClock => prevClock === clock ? clock2 : clock);
    },500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <img src={currentClock} alt="Sticker" className="z-10 w-32 h-32  " />
  );
};

export default Clock;