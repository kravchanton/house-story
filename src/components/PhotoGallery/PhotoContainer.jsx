import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotoGallery } from "../../bll/reducers/photoReducer";

import styles from "./photo.module.scss";

import { Container } from "../Container";
import { NavigationContainer } from "./NaviagationContainer";
import { PhotoList } from "./PhotoList";

export const PhotoContainer = () => {
  const [folder, setFolder] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotoGallery());
  }, []);
  let Arr = [];
  let data = useSelector((state) => state.photo.photo);
  data?.map((t) =>
    t.attributes.photo.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
        ? Arr.push(item)
        : ""
    )
  );
  let dataTransfer;
  if (search.length > 1) {
    dataTransfer = Arr;
  } else if (data) {
    dataTransfer = data[folder]?.attributes?.photo;
  }

  return (
    <section className={styles.photogallery}>
      <Container>
        <h2 className={styles.title}>Фотогалерея</h2>
        <div className={styles.wrapper}>
          <NavigationContainer
            setSearch={setSearch}
            search={search}
            data={data}
            folder={folder}
            setFolder={setFolder}
          />
          {Arr.length > 0 && (
            <PhotoList key={dataTransfer[0]?.id} folder={dataTransfer} />
          )}
        </div>
      </Container>
    </section>
  );
};
