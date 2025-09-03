import ThemeProvider from "./mp1/ThemeContext";
import ThemeSwitcher from "./mp1/ThemeSwitcher";

import AuthProvider from "./mp2/AuthContext";
import UserAuth from "./mp2/UserAuth";

const AppDay12 = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3 style={{ color: "blue" }}>Mini Project 1: Theme Switcher</h3>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <h3 style={{ color: "green", marginTop: "40px" }}>
        Mini Project 2: User Authentication
      </h3>
      <AuthProvider>
        <UserAuth />
      </AuthProvider>
    </div>
  );
};

export default AppDay12;
