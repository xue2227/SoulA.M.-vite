import { Link } from "react-router-dom";
import angelImage from '../../assets/resultJpg/angel.jpg';

/* eslint-disable react-refresh/only-export-components */
function ResultAngel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img src={angelImage} alt="Angel" className=" h-4/5" />
      <br/>
      <Link to="/">
        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 transition duration-300 hover:bg-gray-800 hover:text-white">
          再測一次
        </div>
      </Link>
    </div>
  )
}

export default ResultAngel;

