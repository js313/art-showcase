import ImageList from "../components/ImageList";
import SkeletonLoader from "../components/SkeletonLoader";
import { useGallery } from "../hooks/useGallery";

const Galleries = () => {
  const { images, albums } = useGallery();

  if (!images || !albums) return <SkeletonLoader count={12} />;

  return <ImageList albums={albums} images={images} />;
};

export default Galleries;
