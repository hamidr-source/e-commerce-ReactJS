import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";
import { AnimatePresence } from "framer-motion";

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-light-background text-light-primary dark:bg-dark-background dark:text-dark-primary">
      <Header onToggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        <AnimatePresence>
          {isSidebarOpen && (
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          )}
        </AnimatePresence>

        <main className="flex-1 p-4">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
