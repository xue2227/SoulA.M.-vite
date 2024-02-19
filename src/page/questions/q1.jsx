import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";

/* eslint-disable react-refresh/only-export-components */
const Q1 = () => {
  const { PolitenessLevel, setPolitenessLevel, CasualLevel, setCasualLevel } =
    useContext(QuizContext);

  const handleOption1 = () => {
    setCasualLevel(CasualLevel + 2);
  };

  const handleOption2 = () => {
    setPolitenessLevel(PolitenessLevel + 2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q1:快到達目的地了，卻發現交流道大排長龍，這時你會選擇？</h2>
        </div>
        <Link to="/1to2" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            再往前開，看看有沒有空隙再切過去。
          </div>
        </Link>
        <Link to="/1to2" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            乖乖排隊，隨著車流緩緩前進。
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Q1;
