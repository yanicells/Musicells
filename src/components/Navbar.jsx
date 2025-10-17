import { Link } from "react-router";
import { useState } from "react";

function NavItem({ text, path, onClick }) {
  return (
    <Link 
      to={path} 
      onClick={onClick}
      className="justify-center py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium"
    >
      {text}
    </Link>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Favorites", path: "/favorites" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex gap-5 justify-between items-center py-2.5 px-8 sm:px-10 sm:py-4 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full bg-[#ffffffff]">
      <div className="flex gap-2 justify-between items-center py-1.5 my-auto">
        <a href="/" className="flex gap-2 justify-center items-center pt-2">
          <div className="flex justify-center items-center px-0.5">
            <img
              src="/logo.png"
              className="h-10 w-10"
              alt="Logo"
            />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            musicells
          </div>
        </a>
      </div>

      <nav className="hidden sm:flex gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} path={item.path} />
        ))}
      </nav>

      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6 text-gray-900" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-6 sm:hidden bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} path={item.path} onClick={closeMenu} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;