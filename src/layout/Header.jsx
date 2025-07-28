import { Link } from "react-router-dom";
import ThemeController from "../components/ThemeController/ThemeController";
import MenuIcon from "@mui/icons-material/Menu";

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
          <MenuIcon fontSize="large" />
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
            className=" transition-all duration-500"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <ThemeController iconColorClass={`text-white`} />
        </div>
      </div>
    </header>
  );
}

export default Header;
