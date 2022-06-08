import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./ColorButtons.css";

let ColorButtons = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeColor = (e) => {
    e.preventDefault();
    setTheme(theme === "white" ? "blue" : "white");
  };

  return (
    <div className="color-buttons">
      <button className="white" onClick={handleThemeColor}></button>
      <button className="blue" onClick={handleThemeColor}></button>
      {/* <button className="purple"></button> */}
    </div>
  );
};

export default ColorButtons;
