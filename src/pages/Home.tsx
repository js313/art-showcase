// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { fetchGitHubImages } from "../api/getImages";

const Home = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const fetched = await fetchGitHubImages();
      setImages(fetched);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) return <p>Loading art...</p>; // TODO: change this to a loader

  return (
    <div className="flex flex-wrap gap-8">
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Art ${index + 1}`}
          loading="lazy"
          className="h-50 object-contain cursor-pointer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none"; // Do not render if cannot be loaded for any reason
          }}
        />
      ))}
    </div>
  );
};

export default Home;
