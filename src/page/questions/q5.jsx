import { Link } from "react-router-dom";
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Q5 = () => {
  const { PolitenessLevel, setPolitenessLevel,} = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
  };

  const handleOption2 = () => {
    // No changes to any levels
  };

  return (
    <div className="flex flex-col items-center justify-center sm:min-h-svg min-h-screen  bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q5:正當你準備欣賞美麗的風景，卻聽見別人手機傳來巨大的聲響，你心想？</h2>
        </div>
        <Link to="/5to6" onClick={handleOption1}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            幹嘛開那麼大聲，氛圍都被破壞了。
          </div>
        </Link>
        <Link to="/5to6" onClick={handleOption2}>
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            真好奇他在看什麼，看那麼仔細。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q5