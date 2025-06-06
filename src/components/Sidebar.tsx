import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";

const Sidebar = () => {
  const location = useLocation();
  const linkClass = (pathRegex: RegExp) => {
    return `block text-lg hover:underline ${
      pathRegex.test(location.pathname) ? "underline text-red-400" : ""
    }`;
  };

  return (
    <div className="p-6 flex flex-col justify-between min-h-full">
      <div>
        <h1 className="text-5xl font-bold mb-8 kumbh-sans-font text-red-300">
          Nidhi Sharma
        </h1>
        <nav className="space-y-3">
          <Link
            to="/"
            className={`${linkClass(
              new RegExp("/$")
            )} cutive-mono-font text-sm w-0`}
          >
            Home
          </Link>
          <Link
            to="/galleries"
            className={`${linkClass(
              new RegExp("/galleries/*")
            )} cutive-mono-font text-sm w-0`}
          >
            Galleries
          </Link>
          <Link
            to="/about"
            className={`${linkClass(
              new RegExp("/about/*")
            )} cutive-mono-font text-sm w-0`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${linkClass(
              new RegExp("/contact/*")
            )} cutive-mono-font text-sm w-0`}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-10">
        <div className="flex gap-2">
          <a
            href="https://facebook.com/share/16dS6sbdcW"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="w-4 h-4 hover:text-red-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com/palette_passion_project"
            target="_blank"
            rel="noreferrer"
          >
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
