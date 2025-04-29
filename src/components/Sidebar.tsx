import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const linkClass = (path: string) =>
    `block text-lg hover:underline ${
      location.pathname === path ? "font-bold" : ""
    }`;

  return (
    <div className="w-1/4 min-w-[200px] bg-gray-100 p-6 flex flex-col justify-between border-r border-gray-300">
      <div>
        <h1 className="text-2xl font-bold mb-8">Your Name</h1>
        <nav className="space-y-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/galleries" className={linkClass("/galleries")}>
            Galleries
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
        </nav>
      </div>
      <div className="flex gap-4 mt-10">
        <a href="#" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
