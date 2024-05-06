import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { QuizContext } from "../../App";
import logo from "../../assets/introPicture/logo.svg";
import cloud from "../../assets/introPicture/cloud.svg";
import underCloud from "../../assets/introPicture/underCloud.svg";
import Sticker from "../../components/sticker";
import Clock from "../../components/clock";
import Start from "../../components/start";
import AdBorad from "../../components/adBoard";
import Dressing from "../../components/dressing";
import { motion, AnimatePresence } from "framer-motion";

const textLines = [
  "在很久很久以前有一個傳說，",
  "每個人的心中都住著一個代表著自己的靈魂化身。",
  "而這些靈魂化身們，一共有八個種族，",
  "每個種族的靈魂都擁有著屬於自己的特色。",
  "每到了夜晚眾人皆已熟睡，在黑夜的凌晨3點之時，",
  "靈魂們將開啟屬於他們的狂歡，",
  "夜的慶典盛大舉行中，靈晨3點中！",
];

const Intro = () => {
  const { resetCounter, setReveal } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    resetCounter();
    setReveal(true);
    setTimeout(() => navigate("/0to1"), 500);
  };

  const logoRef = useRef();
  const cloudRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = ((clientX - centerX) / centerX) * -4; // adjust the number for different move effect
      const moveY = ((clientY - centerY) / centerY) * -5; // adjust the number for different move effect
      logoRef.current.style.transform = `translate(${moveX / 2}px, ${
        moveY / 2
      }px)`;
      cloudRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      textRef.current.style.transform = `translate(${moveX / 2}px, ${
        moveY / 2
      }px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-start h-svh w-full py-20 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #b8effc, #7ba8e9)" }}
    >
      <div className="absolute top-0 left-0 w-full h-full px-1 py-9">
        <img
          src={cloud}
          alt="Cloud"
          className="w-full h-full absolute top-0 left-0 z-10 py-9 "
        />
        <img
          ref={cloudRef}
          src={underCloud}
          alt="Cloud"
          className="w-full h-full absolute top-0 left-[0.6rem] z-0 py-9 "
        />
      </div>
      <img
        ref={logoRef}
        src={logo}
        className="relative z-10 w-72 mt-12 pl-2 animate-my-pulse"
        alt="Logo"
      />

      <div
        ref={textRef}
        className="z-10 font-normal text-xs text-center text-pretty px-6 text-stone-600 leading-loose mt-4"
      >
        <AnimatePresence>
          {textLines.map((line, index) => (
            <motion.h3
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: index * 0.125,
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {line}
            </motion.h3>
          ))}
        </AnimatePresence>
      </div>

      <div
        onClick={handleStart}
        className="absolute bottom-14 z-10 animate-bounce "
      >
        <Start>開始</Start>
      </div>

      <div className="fixed bottom-14 left-12 z-10">
        <Sticker />
      </div>
      <div className="fixed bottom-[9rem] right-6 z-10">
        <Clock />
      </div>
      <div className="fixed top-60 right-[-2.5rem] z-10 animate-float">
        <AdBorad />
      </div>
      <div className="fixed top-[22rem] left-2 z-10">
        <Dressing />
      </div>
    </div>
  );
};

export default Intro;
