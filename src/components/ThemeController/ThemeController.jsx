import { useThemeStore } from "../../store/useThemeStore";

const ThemeController = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
    return (
        <button onClick={toggleTheme} className="">
           {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    )
};

export default ThemeController;
