import React, {useState, useEffect} from "react";
import styles from "./ArticlePage.module.scss";
import {MenuButton} from "../../components";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export const Images = ({data, galleryID}) => {
    let [count, setCount] = useState(3)
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

    return <div>
        <div className={styles.images} id={galleryID}>
            {data.slice(0, count).map((t, index) => (<a
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
            </a>))
            }
        </div>
        <div onClick={() => setCount(count + 3)}><MenuButton className={styles.btn} title="Больше фото"/></div>
    </div>
}