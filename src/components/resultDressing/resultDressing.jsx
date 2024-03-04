import DressingSvg from '../../assets/resultJpg/dressingSvg';
import DressingActiveSvg from '../../assets/resultJpg/dressingActiveSvg';
import { useState, useEffect } from 'react';



const ResultDressing = ({ color }) => {
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
    <DressingActiveSvg color={color} className="z-10 w-32 h-32" />
  ) : (
    <DressingSvg color={color} className="z-10 w-32 h-32" />
  );
};

export default ResultDressing;