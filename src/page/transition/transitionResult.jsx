import { Link } from "react-router-dom";

/* eslint-disable react-refresh/only-export-components */
const TransitionResult = () => {
  return (
    <div>
      <h4>
        喝完咖啡後你感到昏昏欲睡，漸漸的抵抗不了強大的睡意...
        再次醒來後你發現你坐在自己的車上，原來一切都是一場夢。天色也暗了，於是你打算踏上歸途，卻發現手上拿著一個信封，上面寫著你的名字。
      </h4>
      <Link to="/angel">顯示結果</Link>
    </div>
  );
};

export default TransitionResult;
