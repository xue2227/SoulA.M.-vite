import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q6 = () => {
  const { PolitenessLevel, setPolitenessLevel, CasualLevel, setCasualLevel } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 2);
  };

  const handleOption2 = () => {
    setCasualLevel(CasualLevel + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-svhsm:min-h-screen  bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q6:當你走到電梯前，電梯正好要關門，你會？</h2>
        </div>
        <Link to="/6to7" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            等下一班電梯好了。
          </div>
        </Link>
        <Link to="/6to7" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            我也要搭！快步向前再把電梯門按開。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q6