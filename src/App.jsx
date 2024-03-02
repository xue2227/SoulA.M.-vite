import "./App.css";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Intro from "./page/transition/intro";
import Q1 from "./page/questions/q1";
import Q2 from "./page/questions/q2";
import Q3 from "./page/questions/q3";
import Q4 from "./page/questions/q4";
import Q5 from "./page/questions/q5";
import Q6 from "./page/questions/q6";
import Q7 from "./page/questions/q7";
import Q8 from "./page/questions/q8";
import Transition0to1 from "./page/transition/transition0to1";
import Transition1to2 from "./page/transition/transition1to2";
import Transition2to3 from "./page/transition/transition2to3";
import Transition3to4 from "./page/transition/transition3to4";
import Transition4to5 from "./page/transition/transition4to5";
import Transition5to6 from "./page/transition/transition5to6";
import Transition6to7 from "./page/transition/transition6to7";
import Transition7to8 from "./page/transition/transition7to8";
import TransitionResult from "./page/transition/transitionResult";
import ResultAngel from "./page/results/resultAngel";
import ResultBaguette from "./page/results/resultBaguette";
import ResultStar from "./page/results/resultStar";
import ResultCapybara from "./page/results/resultCapybara";
import ResultCat from "./page/results/resultCat";
import ResultFlower from "./page/results/resultFlower";
import ResultGhost from "./page/results/resultGhost";
import ResultParty from "./page/results/resultParty";
import Calculate from "./page/transition/calculate";
import MarqueeRight from "./components/MarqueeRight"; 
import MarqueeLeft from "./components/MarqueeLeft";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const QuizContext = createContext();

function App() {
  // 定義三個狀態用於計分
  const [PolitenessLevel, setPolitenessLevel] = useState(0);
  const [SensitivityLevel, setSensitivityLevel] = useState(0);
  const [CasualLevel, setCasualLevel] = useState(0);
  const [progress, setProgress] = useState(1);

  const resetCounter = () => {
    setPolitenessLevel(0);
    setSensitivityLevel(0);
    setCasualLevel(0);
    setProgress(1);
  };

  return (
    <SpeedInsights>
    <QuizContext.Provider
      value={{
        PolitenessLevel,
        setPolitenessLevel,
        SensitivityLevel,
        setSensitivityLevel,
        CasualLevel,
        setCasualLevel,
        progress,
        setProgress,
        resetCounter,
      }}
    >
      <Router>
        <div className="flex flex-col items-center justify-start">
          <div className="fixed top-0 w-full z-50">
            <MarqueeRight />
          </div>

          <div className="fixed bottom-0 w-full z-50">
            <MarqueeLeft />
          </div>
          <Routes>
            <Route path="/" element={<Intro />} />
            {/* <Route path="/" element={<Q6 />} /> */}
            <Route path="/0to1" element={<Transition0to1 />} />
            <Route path="/Q1" element={<Q1 />} />
            <Route path="/1to2" element={<Transition1to2 />} />
            <Route path="/Q2" element={<Q2 />} />
            <Route path="/2to3" element={<Transition2to3 />} />
            <Route path="/Q3" element={<Q3 />} />
            <Route path="/3to4" element={<Transition3to4 />} />
            <Route path="/Q4" element={<Q4 />} />
            <Route path="/4to5" element={<Transition4to5 />} />
            <Route path="/Q5" element={<Q5 />} />
            <Route path="/5to6" element={<Transition5to6 />} />
            <Route path="/Q6" element={<Q6 />} />
            <Route path="/6to7" element={<Transition6to7 />} />
            <Route path="/Q7" element={<Q7 />} />
            <Route path="/7to8" element={<Transition7to8 />} />
            <Route path="/Q8" element={<Q8 />} />
            <Route path="/toResult" element={<TransitionResult />} />
            <Route path="/angel" element={<ResultAngel />} />
            <Route path="/baguette" element={<ResultBaguette />} />
            <Route path="/capybara" element={<ResultCapybara />} />
            <Route path="/cat" element={<ResultCat />} />
            <Route path="/flower" element={<ResultFlower />} />
            <Route path="/ghost" element={<ResultGhost />} />
            <Route path="/party" element={<ResultParty />} />
            <Route path="/star" element={<ResultStar />} />
            <Route path="/calculate" element={<Calculate />} />
          </Routes>
        </div>
      </Router>
    </QuizContext.Provider>
    </SpeedInsights>
  );
}

export default App;
