// src/components/ImageModal.tsx

import { useEffect } from "react";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Close button in top-right of screen */}
      <button
        className="fixed top-4 right-6 text-3xl font-bold text-white hover:text-gray-200 cursor-pointer z-50"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      <div
        className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-auto p-4"
        onClick={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        <img
          src={imageUrl}
          alt="Full size art"
          className="max-h-[80vh] object-contain w-full"
        />
      </div>
    </div>
  );
};

export default ImageModal;
