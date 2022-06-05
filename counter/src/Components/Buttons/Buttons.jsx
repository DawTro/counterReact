import { BsFillPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { BsStopFill } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";

import "./Buttons.css";

let Buttons = (props) => {
  return (
    <div className="buttons">
      <button
        className="button"
        disabled={props.disabled}
        onClick={props.start}>
        <BsFillPlayFill className="play" />
      </button>
      <button className="button" onClick={props.pause}>
        <BsPauseFill className="pause" />
      </button>
      <button className="button" onClick={props.stop}>
        <BsStopFill className="stop" />
      </button>
      <button className="button" onClick={props.history}>
        <BsChevronDoubleDown className="history" />
      </button>
    </div>
  );
};

export default Buttons;
