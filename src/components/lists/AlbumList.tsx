import { useLocation, useNavigate } from "react-router-dom";
import { useGallery } from "../../hooks/useGallery";
import SkeletonLoader from "../SkeletonLoader";
import { Category } from "../../types/category";
import ImageList from "./ImageList";
import { useState } from "react";

const AlbumList = () => {
  const { albums, images, categories } = useGallery();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const categoryName: string = location.pathname.split("/")[2];

  if (!albums || !images || !categories) return <SkeletonLoader count={12} />;

  const albumsToShow = (categories.get(categoryName) as Category).album_ids.map(
    (albumId) => albums[albumId]
  );

  return (
    <>
      <div
        className="flex mb-12 text-center text-5xl text-gray-600 jetbrains-mono-font justify-center-safe cursor-pointer"
        onClick={() => navigate("/galleries")}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        role="button"
        tabIndex={0}
        onKeyDown={() => navigate("/galleries")} // For keyboard users accessibility!!
      >
        <span
          className={`mr-4 transition-transform duration-200 ${
            isHovering ? "-translate-x-1 text-red-300" : ""
          }`}
        >
          &larr;
        </span>{" "}
        <h2>{categoryName}</h2>
      </div>
      <ImageList albums={albumsToShow} images={images} />
    </>
  );
};

export default AlbumList;
