import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../contexts/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default App;
