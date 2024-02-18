import { Link } from "react-router-dom" 

/* eslint-disable react-refresh/only-export-components */
const Q3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="border-2 font-bold border-black p-4 mb-4">
          <h2>Q3:你發現自己變成了一隻土撥鼠，正在地洞裡往前爬行。這時突然出現一隻小精靈想與你互動，你會？</h2>
        </div>
        <Link to="/3to4">
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            立刻停下與小精靈互動，趕快弄清楚怎麼回事。
          </div>
        </Link>
        <Link to="/3to4">
          <div className="border-2 border-black p-4 mb-4 transition duration-300 hover:bg-gray-800 hover:text-white text-center">
            突然停住會擋到其他的鼠鼠，等等再回應吧。
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Q3