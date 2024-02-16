import { Link } from "react-router-dom" 

/* eslint-disable react-refresh/only-export-components */
const Q3 = () => {
  
  return (
    <div>
      <h2>Q3:你發現自己變成了一隻土撥鼠，正在地洞裡往前爬行。這時突然出現一隻小精靈想與你互動，你會？</h2>
      <button><Link to="/3to4">立刻停下與小精靈互動，趕快弄清楚怎麼回事。</Link></button> 
      <button><Link to="/3to4">突然停住會擋到其他的鼠鼠，等等再回應吧。</Link></button>
    </div>
  )
}

export default Q3