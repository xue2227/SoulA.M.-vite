import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const textLines = [
  "你在網路上發現了一場剛開幕的人氣展覽",
  "據說該展覽主打夢境般的沈浸式體驗",
  "|",
  "在看展過程中彷彿走入自己的內心世界",
  "看完展覽後還會獲得一張屬於自己的人格小卡",
  "|",
  "剛好週末還沒有安排",
  "於是你決定駕車前往一探究竟",
  "⋯"
];

const Transition0to1 = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={() => navigate('/Q1')} 
      className="flex flex-col items-center justify-center min-h-svh bg-black text-white p-4 w-full"
    >
      <div className="w-full max-w-lg mx-auto text-center font-normal text-smf text-pretty leading-loose">
        <AnimatePresence>
          {textLines.map((line, index) => (
            <motion.h4 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 1.2, duration: 0.8, ease: "easeInOut" }}
            >
              {line}
            </motion.h4>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Transition0to1