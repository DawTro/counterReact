import "./Time.css";

let Time = (props) => {
  let ms = ("0" + (Math.floor(props.time / 10) % 100)).slice(-2);
  let sec = ("0" + (Math.floor(props.time / 1000) % 60)).slice(-2);
  let min = ("0" + (Math.floor(props.time / 60000) % 60)).slice(-2);

  return (
    <div className="time">
      <p className="minutes">{min}</p>:<p className="secons">{sec}</p>:
      <p className="millisecond">{ms}</p>
    </div>
  );
};

export default Time;
