import React, { useEffect, useState } from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCatalog } from "../../bll/reducers/catalogReducer";

import styles from "./MapPage.module.scss";

import { Excursion, Container } from "../../components";
import { Card } from "./Card";

export const MapPage = () => {
  let idCard = useParams();
  const dispatch = useDispatch();
  const [widthMap, setWidthMap] = useState("90vw");
  const [heightMap, setHeightMap] = useState("80vh");

  useEffect(() => {
    if (document.documentElement.clientWidth < 768) {
      setWidthMap("100%");
      setHeightMap("60vh")
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCatalog());
    /*    idCard.folder === "gallery" && dispatch(fetchPhotoGallery());*/
  }, []);

  let cardData;
  let data;

  data = useSelector((state) => state.catalog.catalog);

  /*  if (idCard.folder === "gallery") {
    data = useSelector((state) => state.photo.photo);
  }*/

  data?.map((t) =>
    t.attributes.item.filter((item) =>
      item.id == idCard.id ? (cardData = item) : ""
    )
  );
  /*  idCard.folder === "gallery" &&
    data?.map((t) =>
      t.attributes.project.filter((item) =>
        item.id === idCard.id ? (cardData = item) : ""
      )
    );*/

  const coordinate = cardData?.coordinates?.split(",").map((t) => Number(t));
  return (
    <div className={styles.wrapper}>
      <Container>
        <section className={styles.mapWrap}>
          <YMaps>
            {cardData && (
              <Map
                width={widthMap}
                height={heightMap}
                z-index={1}
                defaultState={{
                  center: coordinate,
                  zoom: 8,
                }}
              >
                <Placemark geometry={coordinate} />
              </Map>
            )}
          </YMaps>
          {cardData && (
            <div className={styles.position}>
              <Card data={cardData} />
            </div>
          )}
        </section>
        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </div>
  );
};
