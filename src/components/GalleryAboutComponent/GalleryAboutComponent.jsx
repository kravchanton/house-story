import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";

import "./GalleryAboutComponent.scss";

export const GalleryAboutComponent = (props) => {
  const data = useSelector((state) => state.aboutData.aboutData.attributes);
  const [isMobile, setIsMobile] = useState(100);

  useEffect(() => {
    return document.documentElement.clientWidth > 768
      ? setIsMobile(100)
      : setIsMobile(2);
  }, []);

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
      {props.isActiveOffice &&
        data?.photos?.office?.photos?.data
          ?.slice(0, isMobile)
          .map((image, index) => (
            <a
              href={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
              data-pswp-width={image?.attributes?.width}
              data-pswp-height={image?.attributes?.height}
              key={props.galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <div className="imageWrapper">
                <img
                  className="imageGallery"
                  src={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
                  alt=""
                />
              </div>
            </a>
          ))}
      {props.isActiveProduction &&
        data?.photos?.production?.photos?.data?.map((image, index) => (
          <a
            href={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
            data-pswp-width={image?.attributes?.width}
            data-pswp-height={image?.attributes?.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <div className="imageWrapper">
              <img
                className="imageGallery"
                src={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
                alt=""
              />
            </div>
          </a>
        ))}
      {props.isActiveStock &&
        data?.photos?.stock?.photos?.data?.map((image, index) => (
          <a
            href={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
            data-pswp-width={image?.attributes?.width}
            data-pswp-height={image?.attributes?.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <div className="imageWrapper">
              <img
                className="imageGallery"
                src={`${process.env.REACT_APP_UPLOAD_URL}${image?.attributes?.url}`}
                alt=""
              />
            </div>
          </a>
        ))}
    </div>
  );
};
