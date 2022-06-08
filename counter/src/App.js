import Layout from "./Components/Layout/Layout";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("white");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" data-theme={theme}>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
