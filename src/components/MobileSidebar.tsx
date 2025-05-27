import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";
import { useLocation, useNavigate } from "react-router-dom";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close sidebar on navigation to a different page
  useEffect(() => {
    setIsOpen(false);
  }, [location, location.pathname]);

  return (
    <div className="md:hidden p-2 fixed h-15 w-full fixed flex items-center justify-between top-0 z-50 bg-white">
      {/* Title */}
      <p
        className="md:hidden p-2 text-3xl font-bold kumbh-sans-font text-red-300"
        onClick={() => navigate("/")}
      >
        Nidhi Sharma
      </p>
      {/* Hamburger Button */}
      <button
        className="md:hidden p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform transition-transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <Sidebar />
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default MobileSidebar;
