import { Link } from "react-router-dom";
import { Album } from "../types/album";
import { Image } from "../types/image";
import SmartImage from "./SmartImage";
import { useState } from "react";

const ImageList = ({
  albums,
  images,
}: {
  albums: Album[];
  images: Image[];
}) => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  return (
    <div className="flex flex-wrap gap-8">
      {albums.map(({ name, image_ids }, index) => {
        const { url } = images[image_ids[0]];

        // TODO: Handle failure for multiple images in the same album
        if (failedImages.has(url)) return null; // Don't render broken images

        return (
          <Link to={`/image/${encodeURIComponent(name)}`} key={name}>
            <SmartImage
              key={name}
              src={url}
              alt={`Art ${index + 1}`}
              loading="lazy"
              className="h-50 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
              onError={(e) => {
                setFailedImages((prev) => new Set(prev).add(url));
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ImageList;
