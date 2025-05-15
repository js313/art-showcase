import React from "react";

type Props = {
  count?: number;
  minWidth?: number;
  maxWidth?: number;
};

const SkeletonLoader: React.FC<Props> = ({ count = 8 }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {Array.from({ length: count }).map((_, idx) => {
        const widthClass =
          Math.random() <= 0.5
            ? "w-40"
            : Math.random() <= 0.8
            ? "w-60"
            : "w-80";
        return (
          <div
            key={idx}
            className={`h-50 ${widthClass} bg-gray-300 animate-pulse`}
          />
        );
      })}
    </div>
  );
};

export default SkeletonLoader;
