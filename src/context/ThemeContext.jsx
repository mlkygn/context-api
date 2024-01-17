import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

  const [themeName, setThemeName] = useState("light");

  function changeTheme(themeName) {
    document.documentElement.setAttribute("data-bs-theme", themeName);    
  }

  function handleTheme() {
    setThemeName((prev) => {
      const themeNew = prev === "light" ? "dark" : "light";
      changeTheme(themeNew);
      localStorage.setItem("theme", themeNew);
      return themeNew;
    });
}
function getDefaultTheme() {
    const storeTheme = localStorage.getItem("theme")
    if (storeTheme) {
      return storeTheme
    }
    return window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"
}
useEffect(()=> {
    const theme = getDefaultTheme()
    changeTheme(theme)
    setThemeName(theme)
})
  return (
    <ThemeContext.Provider value={{ themeName, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider, ThemeContext };
