import TitleCounter from "../TitleCounter/TitleCounter";

let Layout = () => {
  return (
    <div className="container">
      <TitleCounter />
      <div className="time">
        <p>Tutaj będzie czas</p>
      </div>
      <div className="buttons">
        <p>Tutaj będą przyciski</p>
      </div>
      <div className="history">
        <p>Tutaj będą widoczne wyniki historyczne</p>
      </div>
    </div>
  );
};
export default Layout;
