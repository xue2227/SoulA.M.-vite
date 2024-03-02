import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q1Topic from "../../assets/topicPicture/q1Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";


/* eslint-disable react-refresh/only-export-components */
const Q1 = () => {
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
    setCasualLevel(CasualLevel + 2);
    setProgress(progress + 1);
    navigate("/1to2");
  };

  const handleOption2 = () => {
    setPolitenessLevel(PolitenessLevel + 0);
    setProgress(progress + 1);
    navigate("/1to2");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto  ">
      <div className="w-full max-w-lg mx-auto ">
        
      <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>Q1:快到達目的地了，卻發現交流道大排長龍，這時你會選擇？</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q1Topic} alt="q1Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full text-sm">
          <Option1>再往前開，看看有沒有空隙再切過去。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full text-sm">
          <Option2>乖乖排隊，隨著車流緩緩前進。</Option2>
        </div>
      </div>


    </div>
  );
};

export default Q1;