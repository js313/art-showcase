import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

const Sidebar = () => {
  const location = useLocation();
  const linkClass = (path: string) =>
    `block text-lg hover:underline ${
      location.pathname === path ? "underline text-red-400" : ""
    }`;

  return (
    <div className="p-6 flex flex-col justify-between min-h-full">
      <div>
        <h1 className="text-5xl font-bold mb-8 kumbh-sans-font text-red-300">
          Nidhi Sharma
        </h1>
        <nav className="space-y-3">
          <Link
            to="/"
            className={`${linkClass("/")} cutive-mono-font text-sm w-0`}
          >
            Home
          </Link>
          <Link
            to="/galleries"
            className={`${linkClass(
              "/galleries"
            )} cutive-mono-font text-sm w-0`}
          >
            Galleries
          </Link>
          <Link
            to="/about"
            className={`${linkClass("/about")} cutive-mono-font text-sm w-0`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${linkClass("/contact")} cutive-mono-font text-sm w-0`}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-10">
        <div className="flex gap-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon className="w-4 h-4 hover:text-red-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon className="w-4 h-4 hover:text-red-400 transition-colors" />
          </a>
        </div>
        <p className="text-xs text-gray-400 cutive-mono-font mt-2">
          Follow me on social media!
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
