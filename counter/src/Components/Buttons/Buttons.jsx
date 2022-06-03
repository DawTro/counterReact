import { BsFillPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { BsStopFill } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";

import "./Buttons.css";

let Buttons = (props) => {
  return (
    <div className="buttons">
      <div className="button" onClick={props.start}>
        <BsFillPlayFill className="play" />
      </div>
      <div className="button" onClick={props.pause}>
        <BsPauseFill className="pause" />
      </div>
      <div className="button" onClick={props.stop}>
        <BsStopFill className="stop" />
      </div>
      <div className="button" onClick={props.history}>
        <BsChevronDoubleDown className="history" />
      </div>
    </div>
  );
};

export default Buttons;
