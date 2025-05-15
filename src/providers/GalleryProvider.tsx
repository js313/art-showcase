import { ReactNode, useEffect, useState } from "react";
import { GalleryData } from "../types/gallery-data";
import GalleryContext from "../context/GalleryContext";
import { fetchGitHubImages } from "../api/getImages";

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<GalleryData | undefined>(undefined);

  useEffect(() => {
    if (data) return;

    fetchGitHubImages(setData);
  }, [data, setData]);

  return (
    <GalleryContext.Provider value={data}>{children}</GalleryContext.Provider>
  );
};
