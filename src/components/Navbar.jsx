import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-apricot/90 backdrop-blur-md shadow-md text-cosmos px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-canadaRed">Portfolio</div>
      <ul className="flex gap-6 text-mapleGray font-medium">
        <li>
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-canadaRed transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-canadaRed transition">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-canadaRed transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-canadaRed transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
