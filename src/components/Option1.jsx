import { useState, useEffect } from 'react';
import svg4everybody from 'svg4everybody';
import BorderSvg1 from "../assets/topicPicture/選項框1.jsx";

function Option1({ children }) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    svg4everybody();
  }, []);

  return (
    <div
      className="relative m-2 mb-4 text-center h-20 transform transition duration-500 ease-in-out hover:scale-110 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute top-0 left-0 z-0 w-full h-full flex items-center justify-center"
      >
        <BorderSvg1
          className="w-full h-full "
          fill={hover ? "black" : "none"}
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

export default Option1;