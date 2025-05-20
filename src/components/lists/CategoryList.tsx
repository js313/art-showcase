import { Link } from "react-router-dom";
import { Album } from "../../types/album";
import { Image } from "../../types/image";
import SmartImage from "../SmartImage";
import { useState } from "react";
import { Category } from "../../types/category";

const CategoryList = ({
  albums,
  images,
  categories,
}: {
  albums: Album[];
  images: Image[];
  categories: Category[];
}) => {
  const [isHovering, setIsHovering] = useState<string>("");
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  return (
    <div className="flex flex-wrap gap-8">
      {categories.map(({ name, album_ids }, index) => {
        const image_ids = albums[album_ids[0]].image_ids;
        const { url } = images[image_ids[0]];

        // TODO: Handle failure for multiple images in the same category
        if (failedImages.has(url)) return null; // Don't render broken images

        return (
          <Link
            to={`${encodeURIComponent(name)}`}
            key={name}
            className="cursor-pointer"
            onMouseEnter={() => setIsHovering(name)}
            onMouseLeave={() => setIsHovering("")}
          >
            <SmartImage
              key={name}
              src={url}
              alt={`Art ${index + 1}`}
              loading="lazy"
              className={`h-50 object-contain transition-transform duration-200 ${
                isHovering === name ? "scale-105" : ""
              }`}
              onError={(e) => {
                setFailedImages((prev) => new Set(prev).add(url));
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <p
              className={`text-center cutive-mono-font mt-1 text-sm ${
                isHovering === name ? "underline text-red-400" : ""
              }`}
            >
              {/* Remove extensions */}
              {name.split(".")[0]}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;
