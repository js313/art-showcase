import { Album } from "../types/album";
import { Category } from "../types/category";
import { GitHubImage } from "../types/github-image";
import { Image } from "../types/image";

type SetData = (data: {
  images: Image[];
  albums: Album[];
  categories: Map<string, Category>;
}) => void;

const backupImageResponse: GitHubImage[] = [
  {
    name: "0001-worley_painting-paint_1.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/66a2d3ef-54e1-4638-94bc-be2b5398a7a0/1/1/IMG_6436.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0002-worley_painting-paint_2.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/4516004c-554b-4efe-a2fc-8a6360b3c721/1/1/IMG_6417.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0003-worley_painting-paint_3.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/3f876ac4-e63c-4d7e-a307-29da40db536d/1/1/IMG_6385.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0004-worley_painting-paint_4.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2293,3473,1600,3473/0-0-0/e3975084-0ca4-4283-9260-2f6c9e970f78/1/1/P1050408.JPG?fjkss=exp=2060518293~hmac=9f8cdcb727ebe5fe6427b1095ef148f96a9cf2a042ebd7c79aa48c76100c89dc",
  },
  {
    name: "0005-worley_painting-paint_5.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3965,2231,3965,1200/0-0-0/308a4061-877f-43ba-9d20-955d35f5c3cb/1/1/SpacePicnic-Detail.jpg?fjkss=exp=2060518293~hmac=9f7fc1a20315b6cf9e506b517df7b7838cc602926b8f07c498310bb54302d92c",
  },
  {
    name: "0006-worley_painting-paint_6.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/27e35720-0a95-40f5-b789-9e4eb8bf66d7/1/1/IMG_6497.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0007-worley_painting-paint_7.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/eb12885d-d652-44c7-82c3-78e352f93ba1/1/1/IMG_6333.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0008-worley_painting-paint_8.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/e313693e-a7e1-4fc0-80a4-6996a0e6e0e6/1/1/IMG_6230.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
  },
  {
    name: "0009-worley_painting-paint_9.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,960,720,960,1200/0-0-0/c6ac5d9a-e274-4c5e-b5fc-7f102fd58747/1/1/SpacePicnic-FullInstall.jpg?fjkss=exp=2060518293~hmac=730ae4b429baf0ac08ed70bc2382d167aa793f3b386a10aa45dff038e91f0538",
  },
  {
    name: "0010-worley_painting-paint_10.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2332,3499,1600,3499/0-0-0/87baf20a-9c87-4a26-aae8-95ce7baf7880/1/1/2013.AccumulationNo2.detail.JPG?fjkss=exp=2060518293~hmac=dd0f9a414f52f1d7d95945ff366f8ae23c6182a467c62af0109230968f34bbfb",
  },
  {
    name: "0011-worley_painting-paint_11.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3240,2049,3240,1200/0-0-0/bb7cd212-42bd-419d-98e6-016e111912aa/1/1/P1060201.JPG?fjkss=exp=2060518293~hmac=cc1aee67713ada5fd6ab4de064be7bdeea92c0f738f6bd35e28602a872f86960",
  },
  {
    name: "0012-worley_painting-paint_12.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,762,1000,1600,1000/0-0-0/ee7d11ae-0824-437a-b79b-d2033184b8b2/1/1/AndreaManning.Blue+with+Zip.2011.AcrylicLatexPaint.27x49x6.jpg?fjkss=exp=2060518293~hmac=0659a0eb28e2c2aab9b6fb8411d8a917562c1acdf156b91bd880d662c3eb1032",
  },
  {
    name: "0013-worley_painting-paint_13.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,720,960,1600,960/0-0-0/5f21b176-5316-4286-ae38-6a16c9b244d4/1/1/SpacePicnic-BiodomeAction.jpg?fjkss=exp=2060518293~hmac=c17032c701e4b3763f83d00cadb9be6d431ba9abe7b6c3daa86c28354d1a576e",
  },
  {
    name: "0014-modern_painting-paint_16.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,1445,2047,1600,2047/0-0-0/7b638cb0-3de3-4a43-95bf-0bacfef6df36/1/1/IMG_6494.JPG.JPG?fjkss=exp=2060518293~hmac=fc52bb992a18d62b8bdc3ed9d62fc5fcddf41bc09bfdf177cd490d88afe6fd80",
  },
  {
    name: "0015-worley_painting-paint_15.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3456,2304,3456,1200/0-0-0/8e9d7d7c-5d60-454b-a40d-cc1de58fdd9b/1/1/IMG_6380.JPG.JPG?fjkss=exp=2060518293~hmac=df52b008970e54452f6126bff0a27bc3f786cc51441eaf852225649485da5a55",
  },
  {
    name: "0016-modern_painting-paint_16.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2428,3643,1600,3643/0-0-0/ddf5d1eb-d905-4f2e-8ba7-7d7792d655e4/1/1/2012.SlinkyGreen.AcrylicLatexPaint.36x40x27.JPG?fjkss=exp=2060518293~hmac=380d54c5cf849d1e2addaca8e09dd8e03514b63f83c627bef8baa273025cc28e",
  },
  {
    name: "0017-modern_painting-paint_16.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2703,3156,1600,3156/0-0-0/d4a57e5b-ab56-4eb5-9b36-8032af1e694c/1/1/P1050401_2.jpg?fjkss=exp=2060518293~hmac=e450c0b2b50fb085e1f6b115885d54e88aad44db67577bc630a4854e578c2fb5",
  },
  {
    name: "0018-worley_painting-paint_18.png",
    download_url:
      "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,960,720,960,1200/0-0-0/8f6bf552-ac6b-4815-8545-8761ce71f09d/1/1/SpacePicnic-BiodomeCommuning.jpg?fjkss=exp=2060518293~hmac=730ae4b429baf0ac08ed70bc2382d167aa793f3b386a10aa45dff038e91f0538",
  },
];

export const fetchGitHubImages = async (setData: SetData) => {
  setTimeout(async () => {
    const GITHUB_API_URL =
      "https://api.github.com/repos/js313/art-showcase-images-test/contents";

    try {
      let data: GitHubImage[] = backupImageResponse;
      try {
        const response = await fetch(GITHUB_API_URL);
        data = await response.json();
      } catch (error) {
        console.error(error);
        data = backupImageResponse;
      }

      // Step 1: Filter images
      const rawImages = data.filter((file) =>
        /\.(jpe?g|png|gif|webp|bmp)$/i.test(file.name)
      );

      // Step 2: Parse + sort images by descending ID
      const images: Image[] = rawImages
        .map((file) => {
          const [idStr, category_name, album_name] = file.name.split("-");
          return {
            id: Number(idStr),
            category_name,
            album_name,
            url: file.download_url,
          };
        })
        .sort((a, b) => b.id - a.id);

      // Step 3: Group into albums
      const albumsMap = new Map<string, Album>();
      for (const [idx, image] of images.entries()) {
        if (!albumsMap.has(image.album_name)) {
          albumsMap.set(image.album_name, {
            name: image.album_name,
            category_name: image.category_name,
            image_ids: [idx],
          });
        } else {
          albumsMap.get(image.album_name)!.image_ids.push(idx);
        }
      }
      // Sort image_ids inside albums (descending)
      albumsMap.forEach((album) =>
        album.image_ids.sort((a, b) => images[b].id - images[a].id)
      );

      const albums = Array.from(albumsMap.values());

      // Step 4: Group albums into categories
      const categoriesMap = new Map<string, Category>();
      for (const [idx, album] of albums.entries()) {
        if (!categoriesMap.has(album.category_name)) {
          categoriesMap.set(album.category_name, {
            name: album.category_name,
            album_ids: [idx],
          });
        } else {
          categoriesMap.get(album.category_name)!.album_ids.push(idx);
        }
      }

      const categories = categoriesMap;

      setData({
        images,
        albums,
        categories,
      });

      // Return list of raw URLs
      return rawImages.map((img) => img.download_url);
    } catch (error) {
      console.error("Error processing GitHub images:", error);
      setData({
        images: [
          {
            id: 1,
            album_name: "paint_1",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/66a2d3ef-54e1-4638-94bc-be2b5398a7a0/1/1/IMG_6436.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 2,
            album_name: "paint_2",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/4516004c-554b-4efe-a2fc-8a6360b3c721/1/1/IMG_6417.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 3,
            album_name: "paint_3",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/3f876ac4-e63c-4d7e-a307-29da40db536d/1/1/IMG_6385.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 4,
            album_name: "paint_4",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2293,3473,1600,3473/0-0-0/e3975084-0ca4-4283-9260-2f6c9e970f78/1/1/P1050408.JPG?fjkss=exp=2060518293~hmac=9f8cdcb727ebe5fe6427b1095ef148f96a9cf2a042ebd7c79aa48c76100c89dc",
          },
          {
            id: 5,
            album_name: "paint_5",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3965,2231,3965,1200/0-0-0/308a4061-877f-43ba-9d20-955d35f5c3cb/1/1/SpacePicnic-Detail.jpg?fjkss=exp=2060518293~hmac=9f7fc1a20315b6cf9e506b517df7b7838cc602926b8f07c498310bb54302d92c",
          },
          {
            id: 6,
            album_name: "paint_6",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/27e35720-0a95-40f5-b789-9e4eb8bf66d7/1/1/IMG_6497.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 7,
            album_name: "paint_7",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/eb12885d-d652-44c7-82c3-78e352f93ba1/1/1/IMG_6333.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 8,
            album_name: "paint_8",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2304,3456,1600,3456/0-0-0/e313693e-a7e1-4fc0-80a4-6996a0e6e0e6/1/1/IMG_6230.JPG.JPG?fjkss=exp=2060518293~hmac=e0eaa9487fca6522b3bb5dd19746258f328777699d59253bf3cc8b1feeee84e6",
          },
          {
            id: 9,
            album_name: "paint_9",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,960,720,960,1200/0-0-0/c6ac5d9a-e274-4c5e-b5fc-7f102fd58747/1/1/SpacePicnic-FullInstall.jpg?fjkss=exp=2060518293~hmac=730ae4b429baf0ac08ed70bc2382d167aa793f3b386a10aa45dff038e91f0538",
          },
          {
            id: 10,
            album_name: "paint_10",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2332,3499,1600,3499/0-0-0/87baf20a-9c87-4a26-aae8-95ce7baf7880/1/1/2013.AccumulationNo2.detail.JPG?fjkss=exp=2060518293~hmac=dd0f9a414f52f1d7d95945ff366f8ae23c6182a467c62af0109230968f34bbfb",
          },
          {
            id: 11,
            album_name: "paint_11",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3240,2049,3240,1200/0-0-0/bb7cd212-42bd-419d-98e6-016e111912aa/1/1/P1060201.JPG?fjkss=exp=2060518293~hmac=cc1aee67713ada5fd6ab4de064be7bdeea92c0f738f6bd35e28602a872f86960",
          },
          {
            id: 12,
            album_name: "paint_12",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,762,1000,1600,1000/0-0-0/ee7d11ae-0824-437a-b79b-d2033184b8b2/1/1/AndreaManning.Blue+with+Zip.2011.AcrylicLatexPaint.27x49x6.jpg?fjkss=exp=2060518293~hmac=0659a0eb28e2c2aab9b6fb8411d8a917562c1acdf156b91bd880d662c3eb1032",
          },
          {
            id: 13,
            album_name: "paint_13",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,720,960,1600,960/0-0-0/5f21b176-5316-4286-ae38-6a16c9b244d4/1/1/SpacePicnic-BiodomeAction.jpg?fjkss=exp=2060518293~hmac=c17032c701e4b3763f83d00cadb9be6d431ba9abe7b6c3daa86c28354d1a576e",
          },
          {
            id: 14,
            album_name: "paint_14",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,1445,2047,1600,2047/0-0-0/7b638cb0-3de3-4a43-95bf-0bacfef6df36/1/1/IMG_6494.JPG.JPG?fjkss=exp=2060518293~hmac=fc52bb992a18d62b8bdc3ed9d62fc5fcddf41bc09bfdf177cd490d88afe6fd80",
          },
          {
            id: 15,
            album_name: "paint_15",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,3456,2304,3456,1200/0-0-0/8e9d7d7c-5d60-454b-a40d-cc1de58fdd9b/1/1/IMG_6380.JPG.JPG?fjkss=exp=2060518293~hmac=df52b008970e54452f6126bff0a27bc3f786cc51441eaf852225649485da5a55",
          },
          {
            id: 16,
            album_name: "paint_16",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2428,3643,1600,3643/0-0-0/ddf5d1eb-d905-4f2e-8ba7-7d7792d655e4/1/1/2012.SlinkyGreen.AcrylicLatexPaint.36x40x27.JPG?fjkss=exp=2060518293~hmac=380d54c5cf849d1e2addaca8e09dd8e03514b63f83c627bef8baa273025cc28e",
          },
          {
            id: 17,
            album_name: "paint_17",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,2703,3156,1600,3156/0-0-0/d4a57e5b-ab56-4eb5-9b36-8032af1e694c/1/1/P1050401_2.jpg?fjkss=exp=2060518293~hmac=e450c0b2b50fb085e1f6b115885d54e88aad44db67577bc630a4854e578c2fb5",
          },
          {
            id: 18,
            album_name: "paint_18",
            category_name: "worley_painting",
            url: "https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,960,720,960,1200/0-0-0/8f6bf552-ac6b-4815-8545-8761ce71f09d/1/1/SpacePicnic-BiodomeCommuning.jpg?fjkss=exp=2060518293~hmac=730ae4b429baf0ac08ed70bc2382d167aa793f3b386a10aa45dff038e91f0538",
          },
        ],
        albums: [],
        categories: new Map<string, Category>(),
      });
    }
  }, 2000);
};
