import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import logo from "../../assets/introPicture/logo.svg";
import cloud from "../../assets/introPicture/cloud.svg";
import { useEffect, useRef } from "react";
import Sticker from "../../components/sticker";
import {motion} from "framer-motion";

const Intro = () => {
  const { resetCounter } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    resetCounter();
    navigate("/0to1");
  };

  const logoRef = useRef();
  const cloudRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = ((clientX - centerX) / centerX) * -6; // adjust the number for different move effect
      const moveY = ((clientY - centerY) / centerY) * -4; // adjust the number for different move effect
      logoRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      cloudRef.current.style.transform = `translate(${moveX / 3}px, ${moveY /3}px)`;
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-between h-svh w-full py-20"
      style={{ background: "linear-gradient(to bottom, #7ba8e9, #b8effc)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-0 left-0 w-full h-full px-1 py-8">
        <img ref={cloudRef} src={cloud} alt="Cloud" className="w-full h-full object-cover " />
      </div>
      <img ref={logoRef} src={logo} className="z-10 w-8/12 mt-16 pl- animate-my-pulse" alt="Logo" />
      <div className="z-10 font-sm text-xs text-center text-pretty px-10">
        <h3>
          在很久很久以前有一個傳說，
          <br />
          每個人的心中都住著一個代表著自己的靈魂化身。
          <br />
          而這些靈魂化身們，一共有八個種族，
          <br />
          每個種族的靈魂都擁有著屬於自己的特色。
          <br />
          每到了夜晚眾人皆已熟睡，在黑夜的凌晨3點之時，
          <br />
          靈魂們將開啟屬於他們的狂歡，
          <br />
          夜的慶典盛大舉行中，靈晨3點中！
        </h3>
      </div>
      <div
        onClick={handleStart}
        className="z-10 border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center animate-bounce hover:animate-none hover:scale-125 hover:mb-8 "
      >
        開始
      </div>

      <div className="absolute bottom-16 left-12">
        <Sticker/>
      </div>
    </motion.div>
  );
};

export default Intro;