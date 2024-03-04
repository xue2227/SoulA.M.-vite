import { useNavigate } from "react-router-dom";
import ghost from "../../assets/resultJpg/ghost.png";
import Start from "../../components/start";
import ResultSticker from "../../components/resultDressing/resultSticker";
import ghostcolor from "../../components/progressBar/ghostcolor.svg";
import ResultClock from "../../components/resultDressing/resultClock";
import ResultDressing from "../../components/resultDressing/resultDressing";

/* eslint-disable react-refresh/only-export-components */

function ResultGhost() {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/");
  }

  const color = '#40EBC5'; //change color here
  const isInverse = true;

  return (
    <div className="flex flex-col items-center justify-start p-4 ">
      <img src={ghost} alt="Ghost" className="object-contain md:w-96 w-80 mt-20" />
      <br />
      <div onClick={handleRestart} className="mt-[-1rem]">
        <Start>再測一次</Start>
      </div>
      <div className="absolute bottom-32 left-12 z-20">
        <ResultSticker color={color} content={ghostcolor}/>
      </div>
      <div className="absolute top-16 left-[-0.5rem] z-20 scale-80">
        <ResultClock color={color} isInverse={isInverse}/>
      </div>
      <div className="absolute top-[22rem] right-2 z-20 scale-75">
        <ResultDressing color={color} />
      </div>
    </div>
  );
}

export default ResultGhost;