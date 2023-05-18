import React, { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";

import "./GalleryContactsComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsData } from "../../bll/reducers/contactsReducer";

export const GalleryContactsComponent = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.contactsData.contactsData.attributes
  );
  // const [isMobile, setIsMobile] = useState(100);
  //
  // useEffect(() => {
  //   return document.documentElement.clientWidth > 768
  //     ? setIsMobile(100)
  //     : setIsMobile(2);
  // }, []);

  useEffect(() => {
    dispatch(fetchContactsData());
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
      {data?.photos?.data?.map((image, index) => (
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
