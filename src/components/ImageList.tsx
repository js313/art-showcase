import { Link } from "react-router-dom";
import { Album } from "../types/album";
import { Image } from "../types/image";

const ImageList = ({
  albums,
  images,
}: {
  albums: Album[];
  images: Image[];
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-8">
        {albums.map(({ name, image_ids }, index) => {
          const { url } = images[image_ids[0]];

          return (
            <Link to={`/image/${encodeURIComponent(name)}`} key={name}>
              <img
                key={name}
                src={url}
                alt={`Art ${index + 1}`}
                loading="lazy"
                className="h-50 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ImageList;
