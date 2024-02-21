import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q8 = () => {
  const { PolitenessLevel, setPolitenessLevel } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
  };

  const handleOption2 = () => {
    // No changes to any levels
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-svhsm:min-h-screen  bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q8:你找了一個舒適的座位坐下，喝了一口咖啡發現竟然有加糖！！你會？</h2>
        </div>
        <Link to="/toResult" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            咦我剛剛忘了說嗎？算了也不是不能喝。
          </div>
        </Link>
        <Link to="/toResult" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            我明明說不要糖啊，趕緊去跟店員理論。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q8