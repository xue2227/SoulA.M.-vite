import { useNavigate } from "react-router-dom";
import angelImage from "../../assets/resultJpg/angel.jpg";
import Start from "../../components/start";
import ResultSticker from "../../components/resultDressing/resultSticker";
import angelcolor from "../../components/progressBar/angelcolor.svg";
import ResultClock from "../../components/resultDressing/resultClock";
import ResultDressing from "../../components/resultDressing/resultDressing";

/* eslint-disable react-refresh/only-export-components */

function ResultAngel() {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/");
  }

  const color = '#62D8FB'; //change color here
  const isInverse = true;

  return (
    <div className="relative flex flex-col items-center justify-start p-4 mb-12">
    <img src={angelImage} alt="Angel" className="object-contain md:w-96 w-80 mt-20" />
    <br />
    <div onClick={handleRestart} className="">
      <Start>再測一次</Start>
    </div>
    <div className="absolute bottom-20 left-[-2.5rem] z-20">
      <ResultSticker color={color} content={angelcolor}/>
    </div>
    <div className="absolute top-10 left-[-4.2rem] z-20 scale-80">
      <ResultClock color={color} isInverse={isInverse}/>
    </div>
    <div className="absolute top-[22rem] right-[-4rem] z-20 scale-75">
      <ResultDressing color={color} />
    </div>
  </div>
  );
}

export default ResultAngel;

