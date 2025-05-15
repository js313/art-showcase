import ImageList from "../components/ImageList";
import { useGallery } from "../hooks/useGallery";

const Galleries = () => {
  const { images, albums } = useGallery();

  if (!images || !albums) return <p>Loading art...</p>; // TODO: change to a loader

  return <ImageList albums={albums} images={images} />;
};

export default Galleries;
