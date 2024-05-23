import { useNavigate } from "react-router-dom";
// import flower from "../../assets/resultJpg/flower.jpg";
import flower from "../../assets/resultJpg/flower.gif";
import Start from "../../components/start";
import ResultSticker from "../../components/resultDressing/resultSticker";
import flowercolor from "../../components/progressBar/flowercolor.svg";
import ResultClock from "../../components/resultDressing/resultClock";
import ResultDressing from "../../components/resultDressing/resultDressing";

/* eslint-disable react-refresh/only-export-components */

function ResultFlower() {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/");
  }

  const color = '#ED7F74'; //change color here
  const isInverse = true;

  return (
    <div className="relative flex flex-col items-center justify-start p-4 mb-12">
      <img src={flower} alt="Flower" className="object-contain md:w-96 w-80 mt-20" />
      <br />
      <div onClick={handleRestart} className="">
        <Start>再測一次</Start>
      </div>
      <div className="absolute bottom-20 left-[-2.5rem] z-20">
        <ResultSticker color={color} content={flowercolor}/>
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

export default ResultFlower;