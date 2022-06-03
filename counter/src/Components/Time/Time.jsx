import "./Time.css";

let Time = (props) => {
  return (
    <div className="time">
      <p className="minutes">{props.m}</p>:<p className="secons">{props.s}</p>:
      <p className="millisecond">{props.ms}</p>
    </div>
  );
};

export default Time;
