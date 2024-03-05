import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q7Topic from "../../assets/topicPicture/q7Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
import { motion } from 'framer-motion';

/* eslint-disable react-refresh/only-export-components */
const Q7 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    progress,
    setProgress,
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
    setProgress(progress + 1);
    navigate("/7to8");
  };

  const handleOption2 = () => {
    // No changes to any levels
    setProgress(progress + 1);
    navigate("/7to8");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto"
    >
      <div className="w-full max-w-lg mx-auto ">
        <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>Q7:你打量了四周發現了一位正在用餐的人，他吃得<br/>津津有味還發出咀嚼的聲音，你心想...</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q7Topic} alt="q7Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>天呀，好沒水準的人。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>他在吃啥？吃的這麼起勁。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q7;