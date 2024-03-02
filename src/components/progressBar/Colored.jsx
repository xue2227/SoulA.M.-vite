import catcolor from './catcolor.svg';
import baguettecolor from './baguettecolor.svg';
import starcolor from './starcolor.svg';
import flowercolor from './flowercolor.svg';
import partycolor from './partycolor.svg';
import capybaracolor from './capybaracolor.svg';
import angelcolor from './angelcolor.svg';
import ghostcolor from './ghostcolor.svg';
import cat from './cat.svg';
import baguette from './baguette.svg';
import star from './star.svg';
import flower from './flower.svg';
import party from './party.svg';
import capybara from './capybara.svg';
import angel from './angel.svg';
import ghost from './ghost.svg';

const Colored = ({ currentProgress }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center py-1 box-border">
      <footer className="h-[80px] flex-grow relative mt-4">
        <img className="absolute top-[17.7px] left-[50%] w-[43px] h-[42px] z-10 scale-75" alt="" src={currentProgress >= 5 ? catcolor : cat} />
        <img className="absolute top-[16.4px] left-[75%] w-[32.6px] h-[43.5px] z-10 scale-75" alt="" src={currentProgress >= 7 ? baguettecolor : baguette} />
        <img className="absolute top-[21.6px] left-[10%] w-[42.3px] h-[43.8px] z-10 scale-75" alt="" src={currentProgress >= 1 ? starcolor : star} />
        <img className="absolute top-[20.2px] left-[30%] w-[41.4px] h-[40.3px] z-10 scale-75" alt="" src={currentProgress >= 3 ? flowercolor : flower} />
        <img className="absolute top-[35.8px] left-[85%] w-[35.5px] h-[46.5px] z-10 scale-75" alt="" src={currentProgress >= 8 ? partycolor : party} />
        <img className="absolute top-[38.2px] left-[65%] w-[30.4px] h-[42.7px] z-10 scale-80" alt="" src={currentProgress >= 6 ? capybaracolor : capybara} />
        <img className="absolute top-[38.7px] left-[20%] w-[30.1px] h-[43.6px] z-10 scale-75 " alt="" src={currentProgress >= 2 ? angelcolor : angel} />
        <img className="absolute top-[37px] left-[40%] w-[36px] h-[39.5px] z-10 scale-75" alt="" src={currentProgress >= 4 ? ghostcolor : ghost} />
      </footer>
    </div>
  );
};

export default Colored;