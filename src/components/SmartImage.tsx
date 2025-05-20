import { ImgHTMLAttributes, useEffect, useState } from "react";

const SmartImage = ({
  onError,
  className = "",
  src,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false); // TODO: Maybe add a percent loaded
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);

    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setFailed(true);
  }, [src]);

  return (
    <div className="min-w-6 relative w-fit h-fit">
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-red-300 rounded-full animate-spin"></div>
        </div>
      )}
      {!failed && (
        <img
          {...props}
          key={src}
          src={src}
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setFailed(true);
            onError?.(e);
          }}
        />
      )}
      {failed && null}
    </div>
  );
};

export default SmartImage;
