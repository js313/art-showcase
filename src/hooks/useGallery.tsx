import { useContext } from "react";
import GalleryContext from "../context/GalleryContext";

export const useGallery = () => {
  const ctx = useContext(GalleryContext);
  if (!ctx)
    return { images: undefined, albums: undefined, categories: undefined };
  return ctx;
};
