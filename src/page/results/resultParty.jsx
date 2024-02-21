import { Link } from "react-router-dom";
import party from '../../assets/resultJpg/party.jpg';

/* eslint-disable react-refresh/only-export-components */
function ResultParty() {
  return (
    <div className="flex flex-col items-center justify-start p-4 ">
      <img src={party} alt="Party" className="object-contain md:w-96 w-88" />
      <br/>
      <Link to="/">
        <div className="bg-white text-black border-2 border-black font-bold py-2 px-4 transition duration-300 hover:bg-gray-800 hover:text-white">
          再測一次
        </div>
      </Link>
    </div>
  )
}

export default ResultParty;
