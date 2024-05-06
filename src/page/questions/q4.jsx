import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q4Topic from "../../assets/topicPicture/q4Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
import { motion } from 'framer-motion';

/* eslint-disable react-refresh/only-export-components */
const Q4 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    SensitivityLevel,
    setSensitivityLevel,
    progress,
    setProgress,
    setReveal,
    delayTime
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 4);
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/4to5"), delayTime * 1000);
  };

  const handleOption2 = () => {
    setSensitivityLevel(SensitivityLevel + 0);
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/4to5"), delayTime * 1000);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto"
    >
      <div className="w-full max-w-lg mx-auto ">
        <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>Q4:劇烈聲響後你什都聽不見，隱隱之中你似乎<br/>看見了些什麼，你心想...</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q4Topic} alt="q4Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>天阿這一定很吵。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>哇看起來好熱血。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q4;