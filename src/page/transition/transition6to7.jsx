import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Transition6to7 = () => {
  const navigate = useNavigate();

  const textLines = [
    '"電梯向下緩緩移動"',
    "|",
    "當電梯門打開",
    "你來到了一家安靜的咖啡廳",
    "⋯",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={() => navigate('/Q7')} 
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

export default Transition6to7