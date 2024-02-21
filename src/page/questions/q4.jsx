import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q4 = () => {
  const { PolitenessLevel, setPolitenessLevel, SensitivityLevel, setSensitivityLevel } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 2);
  };

  const handleOption2 = () => {
    setSensitivityLevel(SensitivityLevel + 2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-100svh sm:min-h-screen  bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q4:劇烈聲響後你什都聽不見，隱隱之中你似乎看見了些什麼，你心想？</h2>
        </div>
        <Link to="/4to5" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            天阿這一定很吵。
          </div>
        </Link>
        <Link to="/4to5" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            哇看起來好熱血。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q4