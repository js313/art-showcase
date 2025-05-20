import { useNavigate, useParams } from "react-router-dom";
import { useGallery } from "../hooks/useGallery";
import ImageModal from "./ImageModal";
import { Album } from "../types/album";
import { Image } from "../types/image";
import SkeletonLoader from "./SkeletonLoader";
import Home from "../pages/Home";

const ImageViewer = () => {
  const { albumName } = useParams();
  const {
    images,
    albums,
  }: { images: Image[] | undefined; albums: Album[] | undefined } =
    useGallery();
  const navigate = useNavigate();

  if (!images || !albums) return <SkeletonLoader count={12} />;

  const selectedAlbum = albums?.find(
    (album: Album) => album.name === albumName
  );

  if (!selectedAlbum) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Home />
      <ImageModal
        allImages={images}
        albumImageIndexes={selectedAlbum.image_ids}
        onClose={() => navigate("/")}
      />
    </>
  );
};

export default ImageViewer;
