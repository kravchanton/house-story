import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPhotoGallery } from "../../bll/reducers/photoReducer";

import styles from "./GalleryContainer.module.scss";

import { PhotoList } from "./PhotoList";
import { MenuPhoto } from "./MenuPhoto";
import { MenuButton } from "../MenuButton";
import { CatalogListMobile } from "../Catalog/CatalogListMobile";

export const GalleryContainer = () => {
  const [folder, setFolder] = useState(0);
  const [search, setSearch] = useState("");

  let id = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotoGallery());
    setFolder(id.idPage - 1);
  }, []);
  let Arr = [];
  let data = useSelector((state) => state.photo.photo);
  data?.map((t) =>
    t.attributes.project.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
        ? Arr.push(item)
        : ""
    )
  );
  let dataTransfer;
  if (search.length > 1) {
    dataTransfer = Arr;
  } else if (data) {
    dataTransfer = data[folder]?.attributes?.project;
  }

  return (
    <div className={styles.catalog}>
      <h2>Фотогалерея</h2>
      <div className={styles.wrapper}>
        <MenuPhoto
          search={search}
          setSearch={setSearch}
          data={data}
          folder={folder}
          setFolder={setFolder}
        />
        {data && <PhotoList key={folder} data={dataTransfer} />}
      </div>
      <div className={styles.wrapperMobile}>
        {data?.map((t, index) => {
          return (
            <div
              key={index}
              onClick={() => setFolder(index)}
              className={styles.itemMobile}
            >
              <MenuButton
                title={t.attributes.folder}
                className={
                  folder === index
                    ? `${styles.NavigationButton} ${styles.active}`
                    : styles.NavigationButton
                }
              >
                {t.attributes.icon && (
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <image
                      href={`${process.env.REACT_APP_UPLOAD_URL}${t.attributes?.icon?.data?.attributes?.url}`}
                    />
                  </svg>
                )}
              </MenuButton>
              <CatalogListMobile
                visible={folder === index}
                data={dataTransfer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
