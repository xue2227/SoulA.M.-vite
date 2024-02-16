import { Link } from "react-router-dom" 

/* eslint-disable react-refresh/only-export-components */
const Q6 = () => {
  
  return (
    <div>
      <h2>Q6:當你走到電梯前，電梯正好要關們，你會？</h2>
      <button><Link to="/6to7">等下一班電梯好了。</Link></button> 
      <button><Link to="/6to7">我也要搭！快步向前再把電梯門按開。</Link></button>
    </div>
  )
}

export default Q6