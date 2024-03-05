import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q3Topic from "../../assets/topicPicture/q3Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
import { motion } from 'framer-motion';

/* eslint-disable react-refresh/only-export-components */
const Q3 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    CasualLevel,
    setCasualLevel,
    progress,
    setProgress,
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setCasualLevel(CasualLevel + 0);
    setProgress(progress + 1);
    navigate("/3to4");
  };

  const handleOption2 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
    setProgress(progress + 1);
    navigate("/3to4");
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
          <h2>Q3:你發現自己變成了一隻土撥鼠，正在狹小的地洞裡爬行。這時突然出現一隻小精靈想與你互動，你會...</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q3Topic} alt="q3Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>立刻停下與小精靈互動，趕快弄清楚怎麼回事。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>突然停住會擋到其他的鼠鼠，等等再回應吧。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q3;