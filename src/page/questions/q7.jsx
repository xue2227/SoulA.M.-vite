import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q7 = () => {
  const { PolitenessLevel, setPolitenessLevel } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
  };

  const handleOption2 = () => {
    // No changes to any levels
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q7:你打量了四周發現了一位正在用餐的人，他吃得津津有味發出咀嚼的聲音，你心想？</h2>
        </div>
        <Link to="/7to8" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            天呀，好沒水準的人。
          </div>
        </Link>
        <Link to="/7to8" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            他在吃啥？吃的這麼起勁。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q7