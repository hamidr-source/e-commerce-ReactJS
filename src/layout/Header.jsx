import { Link } from "react-router-dom";

function Header({ onToggleSidebar }) {
  return (
    <header className="bg-blue-400 text-white p-4 shadow-md dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>

        <button
          onClick={onToggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-400">
            Products
          </Link>
          <Link to="/categories" className="hover:text-blue-400">
            Categories
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About us
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
