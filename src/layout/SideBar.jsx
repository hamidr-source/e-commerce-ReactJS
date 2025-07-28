import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeController from "../components/ThemeController/ThemeController";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const overlayVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        M
        variants={overlayVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      ></motion.div>

      <motion.aside
        className={`fixed inset-y-0 right-0 bg-light-background text-light-primary dark:bg-dark-background dark:text-dark-primary w-64 p-4 z-50 md:hidden`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={sidebarVariants}
      >
        <h2 className="text-2xl font-bold mb-6"></h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block hover:text-blue-400"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block hover:text-blue-400"
                onClick={onClose}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-blue-400"
                onClick={onClose}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-blue-400"
                onClick={onClose}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-blue-400"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute right-4 bottom-3">
          <ThemeController
            iconColorClass={`text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary`}
          />
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;
