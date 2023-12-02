import "./Account.css";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEvent,
} from "react";

function RankBar(props) {
  const [width, setWidth] = useState(20);
  const progressRef = useRef(null);
  const expPerRank = [1000, 5000, 10000, 50000, 0];
  useEffect(()=>{
	  setWidth(props.rankPoint / expPerRank[props.rank] * 100);
  }, [props.rankPoint, props.rank]);
  return (
	<>
    <div className="ScrollProgress" ref={progressRef}>
		  <div
			className="ScrollProgress-Progress"
			style={{ width: width + '%' }}
		  >
		  </div>
	</div>
	<div>{props.rankPoint} / {expPerRank[props.rank]}</div>
	</>
  );
}

export default RankBar;
