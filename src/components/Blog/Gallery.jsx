import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";

import "./Gallery.scss";

export const Gallery = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <div className="imageWrapper">
            <img className="imageGallery" src={image.thumbnailURL} alt="" />
          </div>
        </a>
      ))}
    </div>
  );
};
