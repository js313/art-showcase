import { useState } from "react";
import ImageModal from "../components/ImageModal";
import { useGallery } from "../hooks/useGallery";

const Home = () => {
  const { images, albums } = useGallery();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  if (!images) return <p>Loading art...</p>; // TODO: change to a loader

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {albums.map(({ name, image_ids }, index) => {
          const { url } = images[image_ids[0]];

          return (
            <img
              key={name}
              src={url}
              alt={`Art ${index + 1}`}
              loading="lazy"
              className="h-50 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
              onClick={() => setSelectedImageUrl(url)}
            />
          );
        })}
      </div>

      {selectedImageUrl && (
        <ImageModal
          imageUrl={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </>
  );
};

export default Home;
