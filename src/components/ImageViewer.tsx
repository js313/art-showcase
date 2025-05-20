import { useNavigate, useParams } from "react-router-dom";
import { useGallery } from "../hooks/useGallery";
import ImageModal from "./ImageModal";
import SkeletonLoader from "./SkeletonLoader";

const ImageViewer = () => {
  const { albumName } = useParams();
  const { images, albums } = useGallery();
  const navigate = useNavigate();

  if (!images || !albums) return <SkeletonLoader count={12} />;

  const selectedAlbum = albums.find((album) => album.name === albumName);

  if (!selectedAlbum) {
    navigate("/");
    return null;
  }

  return (
    <ImageModal
      allImages={images}
      albumImageIndexes={selectedAlbum.image_ids}
      onClose={() => navigate(-1)}
    />
  );
};

export default ImageViewer;
