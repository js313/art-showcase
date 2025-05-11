// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { fetchGitHubImages } from "../api/getImages";
import ImageModal from "../components/ImageModal";

const Home = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const fetched = await fetchGitHubImages();
      setImages(fetched);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) return <p>Loading art...</p>; // TODO: change to a loader

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Art ${index + 1}`}
            loading="lazy"
            className="h-50 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default Home;
