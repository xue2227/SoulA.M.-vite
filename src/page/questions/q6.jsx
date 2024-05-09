import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q7Topic from "../../assets/topicPicture/q6Topic.gif";
import Colored from "../../components/progressBar/Colored";
import { motion } from 'framer-motion';

/* eslint-disable react-refresh/only-export-components */
const Q6 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    CasualLevel,
    setCasualLevel,
    progress,
    setProgress,
    setReveal,
    delayTime
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/6to7"), delayTime * 1000);
  };

  const handleOption2 = () => {
    setCasualLevel(CasualLevel + 0);
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/6to7"), delayTime * 1000);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto"
    >
      <div className="w-full max-w-lg mx-auto ">
        <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>Q6. 當你走到電梯前，電梯正好要關門，<br/>你會⋯</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q7Topic} alt="q4Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>等下一班電梯好了。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm mb-16">
          <Option2>我也要搭！快步向前再把電梯門按開。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q6;