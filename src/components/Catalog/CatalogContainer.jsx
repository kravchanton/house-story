import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCatalog } from "../../bll/reducers/catalogReducer";

import styles from "./Catalog.module.scss";

import { MenuCatalog } from "./MenuCatalog";
import { CatalogList } from "./CatalogList";
import { MenuButton } from "../MenuButton";
import { CatalogListMobile } from "./CatalogListMobile";

export const CatalogContainer = () => {
  const [folder, setFolder] = useState(0);
  const [search, setSearch] = useState("");

  let id = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
    setFolder(id.idPage - 1);
  }, []);
  let Arr = [];
  let data = useSelector((state) => state.catalog.catalog);
  data?.map((t) =>
    t.attributes.item.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
        ? Arr.push(item)
        : ""
    )
  );
  let dataTransfer;
  if (search.length > 1) {
    dataTransfer = Arr;
  } else if (data) {
    dataTransfer = data[folder]?.attributes?.item;
  }

  return (
    <div className={styles.catalog}>
      <h2>
        Каталог более чем 70 готовых проектов из любых материалов <br />{" "}
        <span>напрямую от производителя и с гарантией до 50 лет</span>
      </h2>
      <div className={styles.wrapper}>
        <MenuCatalog
          search={search}
          setSearch={setSearch}
          data={data}
          folder={folder}
          setFolder={setFolder}
        />
        {data && <CatalogList key={folder} data={dataTransfer} />}
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
                title={t.attributes.title}
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
                map={true}
                data={dataTransfer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
