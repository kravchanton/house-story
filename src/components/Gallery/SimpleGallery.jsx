import React from "react";
import { Gallery } from "./Gallery";

import "./SimpleGallery.scss";

export const SimpleGallery = () => {
  return (
    <div>
      <Gallery
        galleryID="my-test-gallery"
        images={[
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
            width: 1200,
            heigth: 1200,
          },
        ]}
      />
    </div>
  );
};
