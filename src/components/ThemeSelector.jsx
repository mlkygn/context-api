import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { lightIcon, darkIcon } from "./Icons";

function ThemeSelector() {
  const { themeName, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={handleTheme} className="btn btn-secondary">
        {themeName === "light" ? (
          <span>{darkIcon} Dark</span>
        ) : (
          <span>{lightIcon} Light</span>
        )}
      </button>
    </>
  );
}
export default ThemeSelector;
