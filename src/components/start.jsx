import { useState } from 'react';
import StartSvg from "../assets/topicPicture/開始框.jsx";

function Start({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative text-center h-24 w-24 transform transition duration-500 ease-in-out hover:scale-110 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute top-0 left-0 z-0 w-full h-full flex items-center justify-center"
      >
        <StartSvg
          className="w-full h-full"
          fill={hover ? "black" : "white"}
        />
      </div>
      <div
        className={`relative z-10 flex items-center justify-center w-full h-full ${hover ? "text-white" : "text-black"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Start;
