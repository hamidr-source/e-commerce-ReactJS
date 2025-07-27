import { Link } from "react-router-dom";

function Header({ onToggleSidebar }) {
  return (
    <header className="bg-light-accent p-4 text-white shadow-md dark:bg-dark-accent">
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

        <nav className="hidden md:flex space-x-6 transition-all duration-500">
          <Link
            to="/"
            className="hover:text-light-secondary hover:dark:text-dark-secondary transition-all duration-500"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-light-secondary hover:dark:text-dark-secondary transition-all duration-500"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="hover:text-light-secondary hover:dark:text-dark-secondary transition-all duration-500"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="hover:text-light-secondary hover:dark:text-dark-secondary transition-all duration-500"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="hover:text-light-secondary hover:dark:text-dark-secondary transition-all duration-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
