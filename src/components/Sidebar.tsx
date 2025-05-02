import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const linkClass = (path: string) =>
    `block text-lg hover:underline ${
      location.pathname === path ? "underline text-red-400" : ""
    }`;

  return (
    <div className="p-6 flex flex-col justify-between min-h-full">
      <div>
        <h1 className="text-5xl font-bold mb-8 kumbh-sans-font text-red-300">Nidhi Sharma</h1>
        <nav className="space-y-4">
          <Link to="/" className={`${linkClass("/")} cutive-mono-font text-sm`}>
            Home
          </Link>
          <Link to="/galleries" className={`${linkClass("/galleries")} cutive-mono-font text-sm`}>
            Galleries
          </Link>
          <Link to="/contact" className={`${linkClass("/contact")} cutive-mono-font text-sm`}>
            Contact
          </Link>
          <Link to="/about" className={`${linkClass("/about")} cutive-mono-font text-sm`}>
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
