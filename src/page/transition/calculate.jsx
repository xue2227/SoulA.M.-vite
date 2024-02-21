import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../App';

const Calculate = () => {
  const { PolitenessLevel, SensitivityLevel, CasualLevel } = useContext(QuizContext);
  const navigate = useNavigate();

  const Politeness = PolitenessLevel > 5 ? 'I' : 'E';
  const Sensitivity = SensitivityLevel > 1 ? 'T' : 'F';
  const Casual = CasualLevel > 2 ? 'P' : 'J';

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
  }, 2500);

  return (
    <div className="flex items-center justify-centersm:min-h-100svh min-h-screen bg-black text-white p-4 w-full">
      <div className="w-full max-w-lg mx-auto text-center">
        <h4 className="animate-pulse">
          計算中...
        </h4>
      </div>
    </div>
  );
};

export default Calculate;