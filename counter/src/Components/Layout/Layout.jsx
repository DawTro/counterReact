import TitleCounter from "../TitleCounter/TitleCounter";
import Time from "../Time/Time";
import Buttons from "../Buttons/Buttons";

let Layout = () => {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;

  // let myInterval = setInterval()

  let handleTime = () => {
    milliseconds++;
    console.log(milliseconds);
  };

  let handleStart = () => {
    console.log("start wciśnięty");
    handleTime();
  };

  let handlePause = () => {
    console.log("pause wciśnięty");
  };

  let handleStop = () => {
    console.log("stop wciśnięty");
  };

  let handleHistory = () => {
    console.log("wciśnięty history");
  };

  return (
    <div className="container">
      <TitleCounter />
      <Time ms={milliseconds} s={seconds} m={minutes} />
      <Buttons
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
