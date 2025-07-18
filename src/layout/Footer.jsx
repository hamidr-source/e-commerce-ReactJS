import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto shadow-inner">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Hamidreza Rezaei. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
