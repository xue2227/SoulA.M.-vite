import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q2 = () => {
  const { PolitenessLevel, setPolitenessLevel, SensitivityLevel, setSensitivityLevel } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
  };

  const handleOption2 = () => {
    setSensitivityLevel(SensitivityLevel + 2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-100svh sm:min-h-screen  bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q2:這時，你發現一旁要轉彎的機車騎士正狠狠的瞪著你，你心想？</h2>
        </div>
        <Link to="/2to3" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            他在等我嗎？趕快過馬路才不會造成困擾。
          </div>
        </Link>
        <Link to="/2to3" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            不是要禮讓行人嗎，瞪什麼啊？
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q2