import { Link } from "react-router";

function NavItem({ text, path }) {
  return (
    <Link 
      to={path} 
      className="justify-center py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium"
    >
      {text}
    </Link>
  );
}

function Navbar() {
  const navItems = [
    { text: "Home", path: "/" },
    { text: "Favorites", path: "/favorites" }
  ]

  return (
    <div className="flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]">
      <div className="flex gap-2 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
        <div className="flex justify-center items-center px-0.5">
          <img
            src="/logo.png"
            className="h-10 w-10"
            alt="Logo"
          />
        </div>
        <div className="my-auto font-semibold text-2xl text-zinc-950" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
          Musicells
        </div>
      </div>
      <nav className="flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} path={item.path} />
        ))}
      </nav>
    </div>
  );
}

export default Navbar;