// src/components/ThemeController/ThemeController.jsx
import React from "react";
import { useThemeStore } from "../../store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
function ThemeController() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.5, rotate: 90, transition: { duration: 0.3 } },
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-light-primary dark:text-dark-primary flex items-center justify-center
      hover:text-light-secondary hover:dark:text-dark-secondary transition-colors       duration-200 w-20 h-20"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="light-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex items-center justify-center"
          >
            <LightModeRoundedIcon fontSize="large" />
          </motion.div>
        ) : (
          <motion.div
            key="dark-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex items-center justify-center"
          >
            <DarkModeRoundedIcon fontSize="large" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeController;
