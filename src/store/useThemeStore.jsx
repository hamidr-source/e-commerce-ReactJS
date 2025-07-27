import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("theme") || "light";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);
      document.documentElement.className = newTheme;
      return { theme: newTheme };
    });
  },

  setTheme: (newTheme) =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.className = newTheme;
      }
      return { theme: newTheme };
    }),
}));

if (typeof window !== "undefined") {
  document.documentElement.className = getInitialTheme();
}
