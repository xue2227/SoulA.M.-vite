import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../../App";
import Option1 from "../../components/Option1";
import Option2 from "../../components/Option2";
import q5Topic from "../../assets/topicPicture/q6Topic.gif"; // 你需要将这个路径替换为你的图片路径
import Colored from "../../components/progressBar/Colored";
/* eslint-disable react-refresh/only-export-components */
const Q5 = () => {
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
    navigate("/5to6");
  };

  const handleOption2 = () => {
    // No changes to any levels
    setProgress(progress + 1);
    navigate("/5to6");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-svh sm:min-h-screen  bg-white text-black overflow-auto ">
      <div className="w-full max-w-lg mx-auto ">
      <Colored currentProgress={progress} />

        <div className="text-center font-bold p-4 mx-4 text-lg text-stone-900 mb-1 ">
          <h2>Q5:正當你準備欣賞美麗的風景，卻聽見別人手機傳來巨大的聲響，你心想？</h2>
        </div>
        <div className="relative mx-auto w-10/12">
          <img src={q5Topic} alt="q5Contant" className="w-full" />
        </div>

        <div onClick={handleOption1} className="w-full">
          <Option1>幹嘛開那麼大聲，氛圍都被破壞了。</Option1>
        </div>
        <div onClick={handleOption2} className="w-full">
          <Option2>真好奇他在看什麼，看那麼仔細。</Option2>
        </div>
      </div>

    </div>
  );
};

export default Q5;