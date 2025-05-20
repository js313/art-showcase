import { useCallback, useEffect, useState } from "react";
import { Image } from "../types/image";
import SmartImage from "./SmartImage";

interface ImageModalProps {
  allImages: Image[];
  albumImageIndexes: number[];
  onClose: () => void;
}

const ImageModal = ({
  allImages,
  albumImageIndexes,
  onClose,
}: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + albumImageIndexes.length) % albumImageIndexes.length
    );
  }, [albumImageIndexes.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % albumImageIndexes.length);
  }, [albumImageIndexes.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev, onClose]);

  const currentImage = allImages[albumImageIndexes[currentIndex]];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    if (clickX >= width / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Close button in top-right of screen */}
      <button
        className="fixed top-2 right-4 text-3xl font-bold text-white hover:text-gray-200 cursor-pointer z-50"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      <div
        className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-auto p-4"
        onClick={(e) => {
          e.stopPropagation(); // prevent modal from closing
          handleClick(e); // detect left/right click
        }}
      >
        <SmartImage
          src={currentImage.url}
          alt="Full size art"
          className={`max-h-[80vh] object-contain w-full ${
            hoveredSide === "left"
              ? "cursor-w-resize"
              : hoveredSide === "right"
              ? "cursor-e-resize"
              : "cursor-default"
          }`}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const half = rect.width / 2;

            setHoveredSide(x < half ? "left" : "right");
          }}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(e);
          }}
        />
      </div>
      <p className="text-white text-sm absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="cursor-pointer"
        >
          &larr;
        </button>{" "}
        {currentIndex + 1} / {albumImageIndexes.length}{" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="cursor-pointer"
        >
          &rarr;
        </button>
      </p>
    </div>
  );
};

export default ImageModal;
