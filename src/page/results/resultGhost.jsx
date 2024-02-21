import { Link } from "react-router-dom";
import ghost from '../../assets/resultJpg/ghost.jpg';

/* eslint-disable react-refresh/only-export-components */
function ResultGhost() {
  return (
    <div className="flex flex-col items-center justify-start p-4 ">
      <img src={ghost} alt="Ghost" className="object-contain md:w-96 w-88" />
      <br/>
      <Link to="/">
        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 transition duration-300 hover:bg-gray-800 hover:text-white">
          再測一次
        </div>
      </Link>
    </div>
  )
}

export default ResultGhost;
