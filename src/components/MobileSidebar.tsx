import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 text-gray-700"
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
    </>
  );
};

export default MobileSidebar;
