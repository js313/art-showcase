import { useNavigate, useParams } from "react-router-dom";
import { useGallery } from "../hooks/useGallery";
import ImageModal from "./ImageModal";
import { Album } from "../types/album";
import { Image } from "../types/image";

const ImageViewer = () => {
  const { albumName } = useParams();
  const {
    images,
    albums,
  }: { images: Image[] | undefined; albums: Album[] | undefined } =
    useGallery();
  const navigate = useNavigate();

  if (!images || !albums) return <p>Loading art...</p>; // TODO: change to a loader

  const selectedAlbum = albums.find((album: Album) => album.name === albumName);

  if (!selectedAlbum) {
    navigate("/");
    return null;
  }

  return (
    <ImageModal
      imageUrl={images[selectedAlbum.image_ids[0]].url}
      onClose={() => navigate("/")}
    />
  );
};

export default ImageViewer;
