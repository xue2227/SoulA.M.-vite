import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../App';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animate/calculate.json';
import { motion } from 'framer-motion';

const Calculate = () => {
  const { PolitenessLevel, SensitivityLevel, CasualLevel } = useContext(QuizContext);
  const navigate = useNavigate();

  const Politeness = PolitenessLevel >= 7 ? 'I' : 'E';
  const Sensitivity = SensitivityLevel > 1 ? 'T' : 'F';
  const Casual = CasualLevel > 1 ? 'P' : 'J';

  const combination = Politeness + Sensitivity + Casual;

  setTimeout(() => {
    switch (combination) {
      case 'ITP':
        navigate('/cat');
        break;
      case 'ETP':
        navigate('/star');
        break;
      case 'ITJ':
        navigate('/ghost');
        break;
      case 'ETJ':
        navigate('/baguette');
        break;
      case 'IFP':
        navigate('/capybara');
        break;
      case 'EFP':
        navigate('/party');
        break;
      case 'IFJ':
        navigate('/angel');
        break;
      case 'EFJ':
        navigate('/flower');
        break;
      default:
        navigate('/');
    }
  }, 4500);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-svh bg-white text-white p-4 w-full"
    >
      <div className="w-1/2 max-w-lg mx-auto text-center">
        <Lottie animationData={loadingAnimation} />
      </div>
    </motion.div>
  );
};

export default Calculate;