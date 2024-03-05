import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Transition5to6 = () => {
  const navigate = useNavigate();

  const textLines = [
    "繼續往山頂走去",
    "|",
    "你在路的盡頭看見了一台電梯",
    "好奇的你朝著電梯走去",
    "⋯"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={() => navigate('/Q6')} 
      className="flex flex-col items-center justify-center min-h-svh bg-black text-white p-4 w-full"
    >
      <div className="w-full max-w-lg mx-auto text-center">
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

export default Transition5to6