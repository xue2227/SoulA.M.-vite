import { Link } from "react-router-dom" 

/* eslint-disable react-refresh/only-export-components */
const Q1 = () => {
  return (
    <div>
      <h2>Q1:快到達目的地了，卻發現交流道大排長龍，這時你會選擇？</h2>
      <button><Link to="/1to2">再往前開，看看有沒有空隙再切過去。</Link></button> 
      <button><Link to="/1to2">乖乖排隊，隨著車流緩緩前進。</Link></button>
    </div>
  )
}

export default Q1
