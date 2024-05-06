import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q8Topic from "../../assets/topicPicture/q8Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
import { motion } from "framer-motion";

/* eslint-disable react-refresh/only-export-components */
const Q8 = () => {
  const navigate = useNavigate();
  const {
    PolitenessLevel,
    setPolitenessLevel,
    progress,
    setProgress,
    setReveal,
    delayTime,
  } = useContext(QuizContext);

  const handleOption1 = () => {
    setPolitenessLevel(PolitenessLevel + 1);
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/toResult"), delayTime * 1000);
  };

  const handleOption2 = () => {
    // No changes to any levels
    setTimeout(() => setProgress(progress + 1), delayTime * 1000);
    setReveal(true);
    setTimeout(() => navigate("/toResult"), delayTime * 1000);
  };

  return (
    <motion.div className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto">
      <div className="w-full max-w-lg mx-auto ">
        <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>
            Q8:你找了一個舒適的座位坐下，喝了一口咖啡
            <br />
            發現竟然有加糖！！你會...
          </h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q8Topic} alt="q8Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>咦我剛剛忘了說嗎？算了也不是不能喝。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>我明明說不要糖啊，趕緊去跟店員理論。</Option2>
        </div>
      </div>
    </motion.div>
  );
};

export default Q8;
