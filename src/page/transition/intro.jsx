import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuizContext } from '../../App';

/* eslint-disable react-refresh/only-export-components */
const Intro = () => {
  const { resetCounter } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    resetCounter();
    navigate("/0to1");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h3>
            在很久很久以前有一個傳說，每個人的心中都住著一個代表著自己的靈魂化身。而這些靈魂化身們，一共有八個種族，每個種族的靈魂都擁有著屬於自己的特色。每到了夜晚眾人皆已熟睡，在黑夜的凌晨3點之時，靈魂們將開啟屬於他們的狂歡，夜的慶典盛大舉行中，靈晨3點中！
          </h3>
        </div>
        <div onClick={handleStart} className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
          開始
        </div>
      </div>
    </div>
  );
};

export default Intro;