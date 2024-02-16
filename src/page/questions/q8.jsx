import { Link } from "react-router-dom" 

/* eslint-disable react-refresh/only-export-components */
const Q8 = () => {
  
  return (
    <div>
      <h2>Q8:你找了一個舒適的座位坐下，喝了一口咖啡發現竟然有加糖！！你會？</h2>
      <button><Link to="/toResult">咦我剛剛忘了說嗎？算了也不是不能喝。</Link></button> 
      <button><Link to="/toResult">我明明說不要糖啊，趕緊去跟店員理論。</Link></button>
    </div>
  )
}

export default Q8