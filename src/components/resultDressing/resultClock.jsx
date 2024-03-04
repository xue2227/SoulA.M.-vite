import clock from '../../assets/introPicture/clock.svg';
import ClockSvg from '../../assets/resultJpg/clockSvg';
import { useState, useEffect } from 'react';



const ResultClock = ({ color,isInverse }) => {
  const [isSvgVisible, setIsSvgVisible] = useState(false);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSvgVisible(prevIsSvgVisible => !prevIsSvgVisible);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return isSvgVisible ? (
    <ClockSvg color={color} isInverse={isInverse} className="z-10 w-32 h-32" />
  ) : (
    <img src={clock} alt="Sticker" className="z-10 w-32 h-32" />
  );
};

export default ResultClock;