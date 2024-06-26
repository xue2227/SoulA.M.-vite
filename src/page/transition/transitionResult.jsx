import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../App";

const textLines = [
  "喝完咖啡後你感到昏昏欲睡",
  "漸漸的抵抗不了強大的睡意",
  "|",
  "再次醒來後你發現你坐在自己的車上",
  "原來一切都是一場夢",
  "|",
  "天色也暗了",
  "於是你打算踏上歸途",
  "卻發現手上拿著一個信封",
  "上面寫著你的名字",
  "⋯",
];

const TransitionResult = () => {
  const navigate = useNavigate();
  const { setReveal, delayTime } = useContext(QuizContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, textLines.length * 0.125 * 1000 + delayTime * 1000); // after all lines are shown

    return () => clearTimeout(timer); // cleanup on unmount
  }, [delayTime]);

  return (
    <AnimatePresence>
      <motion.div
        onClick={showButton ? () =>{setReveal(false); navigate("/calculate")} : undefined}
        className="flex flex-col items-center justify-center min-h-svh bg-black text-white p-4 w-full"
      >
        <div className="w-full max-w-lg mx-auto text-center font-normal text-smf text-pretty leading-loose">
          <AnimatePresence>
            {textLines.map((line, index) => (
              <motion.h4
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: index * 0.125 + delayTime,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {line}
              </motion.h4>
            ))}
          </AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="border-2 border-none p-4  mt-4 transition duration-300 text-stone-300 text-center text-xs cursor-pointer animate-pulse"
            >
              - 按一下顯示結果 -
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionResult;