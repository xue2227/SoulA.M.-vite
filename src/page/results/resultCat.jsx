import { Link } from "react-router-dom";
import cat from '../../assets/resultJpg/cat.jpg';

/* eslint-disable react-refresh/only-export-components */
function ResultCat() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img src={cat} alt="Cat" className=" h-4/5" />
      <br/>
      <Link to="/">
        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 transition duration-300 hover:bg-gray-800 hover:text-white">
          再測一次
        </div>
      </Link>
    </div>
  )
}

export default ResultCat;