import { createContext } from "react";
import { GalleryData } from "../types/gallery-data";

const GalleryContext = createContext<GalleryData | undefined>(undefined);

export default GalleryContext;
