import { useRef, useState } from "react";
import TitleCounter from "../TitleCounter/TitleCounter";
import Time from "../Time/Time";
import Buttons from "../Buttons/Buttons";

let Layout = () => {
  const [time, setTime] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const increment = useRef(null);

  let history = [1];

  const handleStart = () => {
    console.log("start wciśnięty");
    setDisabled(true);
    increment.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  let handlePause = () => {
    console.log("pause wciśnięty");
    clearInterval(increment.current);
    setDisabled(false);
    setTime(time);
  };

  let handleStop = () => {
    console.log("stop wciśnięty");
    clearInterval(increment.current);
    setDisabled(false);
    history.push(time);
    console.log(history);
    setTime(0);
  };

  let handleHistory = () => {
    console.log("wciśnięty history");
  };

  return (
    <div className="container">
      <TitleCounter />
      <Time time={time} />
      <Buttons
        disabled={disabled}
        start={handleStart}
        pause={handlePause}
        stop={handleStop}
        history={handleHistory}
      />
      <div className="history">
        <p>Tutaj będą widoczne wyniki historyczne</p>
      </div>
    </div>
  );
};
export default Layout;
