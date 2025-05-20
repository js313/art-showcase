import ImageList from "../components/lists/ImageList";
import SkeletonLoader from "../components/SkeletonLoader";
import { useGallery } from "../hooks/useGallery";

const Home = () => {
  const { images, albums } = useGallery();

  if (!images || !albums) return <SkeletonLoader count={12} />;

  return <ImageList albums={albums} images={images} />;
};

export default Home;
