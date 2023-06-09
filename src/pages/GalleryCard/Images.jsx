import React, {useEffect} from "react";
import {Pagination, usePagination} from "pagination-react-js";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import styles from "./GalleryCard.module.scss";
import './pagination.css'

export const Images = ({ data, galleryID }) => {
    let maxEntries = 6
    let offset = 3
    let showFirst = true
    if (document.documentElement.clientWidth < 480) {
        maxEntries = 2
        offset =1
        showFirst = false
    }

    console.log(maxEntries)
  const { currentPage, entriesPerPage, entries } = usePagination(1, maxEntries);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
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
    <div>
      <div className={styles.gallery} id={galleryID}>
        {data
          .slice(entries.indexOfFirst, entries.indexOfLast)
          .map((t, index) => (
            <a
              href={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
              data-pswp-width={t?.attributes?.width}
              data-pswp-height={t?.attributes?.height}
              key={galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.image}
                src={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
                alt=""
              />
            </a>
          ))}
      </div>
      <div className={styles.wrap}>
        <Pagination
          entriesPerPage={entriesPerPage.get}
          totalEntries={data.length}
          currentPage={{ get: currentPage.get, set: currentPage.set }}
          offset={offset}
          classNames={{
            wrapper: "pagination m-auto",
            item: "pagination-item",
            itemActive: "pagination-item-active",
            navPrev: "pagination-item nav-item",
            navNext: "pagination-item nav-item",
            navStart: "pagination-item nav-item",
            navEnd: "pagination-item nav-item",
            navPrevCustom: "pagination-item",
            navNextCustom: "pagination-item",
          }}
          showFirstNumberAlways={showFirst}
          showLastNumberAlways={showFirst}
          navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navPrevCustom={{
            steps: 1,
            content:
              "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
          }}
          navNextCustom={{
            steps: 1,
            content:
              "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
          }}
        />
      </div>
    </div>
  );
};
