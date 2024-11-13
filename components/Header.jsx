import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDark));

    document.body.classList.toggle("dark", !isDark);
  };

  return (
    <header>
      <h1 className="logo">
        <a>World View - React</a>
      </h1>
      <p className="dark-mode" onClick={toggleTheme}>
        <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
        <span className="themeText">{isDark ? "Light" : "Dark"} Mode</span>
      </p>
    </header>
  );
}

export default Header;
