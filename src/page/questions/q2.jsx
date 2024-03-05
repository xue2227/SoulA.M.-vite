import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q2Topic from "../../assets/topicPicture/q2Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
import { motion } from 'framer-motion';

/* eslint-disable react-refresh/only-export-components */
const Q2 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    SensitivityLevel,
    setSensitivityLevel,
    progress,
    setProgress,
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setSensitivityLevel(SensitivityLevel + 2);
    setProgress(progress + 1);
    navigate("/2to3");
  };

  const handleOption2 = () => {
    setPolitenessLevel(PolitenessLevel + 0);
    setProgress(progress + 1);
    navigate("/2to3");
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
          <h2>Q2:這時，你發現一旁要轉彎的機車騎士正狠狠的<br/>瞪著你，你心想...</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q2Topic} alt="q2Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>不是要禮讓行人嗎，瞪什麼啊？</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>他在等我嗎？趕快過馬路才不會造成困擾。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q2;