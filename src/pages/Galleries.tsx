import CategoryList from "../components/lists/CategoryList";
import SkeletonLoader from "../components/SkeletonLoader";
import { useGallery } from "../hooks/useGallery";

const Galleries = () => {
  const { images, albums, categories } = useGallery();

  if (!images || !albums) return <SkeletonLoader count={12} />;

  return (
    <CategoryList
      albums={albums}
      images={images}
      categories={Array.from(categories.values())}
    />
  );
};

export default Galleries;
