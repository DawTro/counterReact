import { /*useEffect,*/ useRef, useState } from "react";
import Theme from "../Theme/Theme";
import TitleCounter from "../TitleCounter/TitleCounter";
import Time from "../Time/Time";
import Buttons from "../Buttons/Buttons";
import History from "../History/History";
import "./Layout.css";

let Layout = () => {
  const [time, setTime] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [historyOn, setHistoryOn] = useState(false);
  const [history, setHistory] = useState([]);
  const increment = useRef(null);

  // useEffect(() => {
  //   localStorage.setItem("history", JSON.stringify(history));
  // }, [history]);

  const handleStart = () => {
    setDisabled(true);
    increment.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  let handlePause = () => {
    clearInterval(increment.current);
    setDisabled(false);
    setTime(time);
  };

  let handleStop = () => {
    console.log("stop wciśnięty");
    clearInterval(increment.current);
    setDisabled(false);
    if (time !== 0) {
      setHistory((prevTime) => {
        return [...prevTime, time];
      });
    }
    console.log(history);
    setTime(0);
  };

  let handleHistory = () => {
    console.log("wciśnięty history");
    setHistoryOn(!historyOn);
  };

  return (
    <div className="container">
      <Theme />
      <TitleCounter />
      <Time time={time} />
      <Buttons
        disabled={disabled}
        start={handleStart}
        pause={handlePause}
        stop={handleStop}
        history={handleHistory}
      />
      <History history={history} on={historyOn} />
    </div>
  );
};
export default Layout;
