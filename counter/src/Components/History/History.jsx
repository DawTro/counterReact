import "./History.css";

let History = (props) => {
  let times = props.history;

  let li = times.map((t) => {
    let ms = ("0" + (Math.floor(t / 10) % 100)).slice(-2);
    let sec = ("0" + (Math.floor(t / 1000) % 60)).slice(-2);
    let min = ("0" + (Math.floor(t / 60000) % 60)).slice(-2);
    return (
      <li key={t}>
        Time: {min}:{sec}:{ms}
      </li>
    );
  });

  return (
    <div className={props.on ? "history-list-on" : "history-list"}>
      <ol className="time-list">{li}</ol>
    </div>
  );
};

export default History;
