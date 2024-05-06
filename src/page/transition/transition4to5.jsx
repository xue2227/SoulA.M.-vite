import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { QuizContext } from "../../App";

const Transition4to5 = () => {
  const navigate = useNavigate();
  const { setReveal, delayTime } = useContext(QuizContext);

  const textLines = [
    "隨著你的視線漸漸恢復",
    "你發現你從土撥鼠變了回來",
    "置身在一個寧靜且優美的山丘上",
    "⋯"
  ];

  return (
    <AnimatePresence>
      <motion.div
        onClick={() => {
          setReveal(true);
          setTimeout(() => navigate("/Q5"), delayTime * 1000);
        }}
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition4to5;