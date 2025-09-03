import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: "#f9f9f9",
      color: "#333",
      padding: "20px",
      textAlign: "center",
      borderRadius: "8px",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f9f9f9",
      padding: "20px",
      textAlign: "center",
      borderRadius: "8px",
    },
  };

  return (
    <div style={theme === "light" ? styles.light : styles.dark}>
      <h2>Theme Switcher</h2>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: theme === "light" ? "#333" : "#f9f9f9",
          color: theme === "light" ? "#f9f9f9" : "#333",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
