import React from "react";
import styles from "./Catalog.module.scss";
import { MenuButton } from "../MenuButton";
import { NavLink } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export const CatalogItem = ({ data, map }) => {
  return (
    <div className={styles.catalogItem}>
      <h4>{data.title}</h4>
      <div className={styles.price}>
        <div>
          {data.square} м<sup>2</sup>
        </div>
        <div>{data.price}₽</div>
      </div>
      <div className={styles.projectNumber}>{data.projectNumber}</div>
      <img
        src={`${process.env.REACT_APP_UPLOAD_URL}${data?.mainPhoto?.data?.attributes?.url}`}
        alt=""
      />
      <div className={styles.wrapperBtn}>
        <NavLink className={styles.firstBtn} to={`${data.id}`}>
          <MenuButton title="Подробнее" className={styles.ItemButton} />
        </NavLink>
        {map ? (
          <NavLink to={`/map/catalog/${data.id}`}>
            <MenuButton title="На карте" className={styles.maps} />
          </NavLink>
        ) : (
          <div className={styles.share}>
            <p>Поделиться</p>
            <div className={styles.shareLinks}>
              <WhatsappShareButton
                title={data.title}
                url={`${window.location.href}/${data.id}`}
              >
                <WhatsappIcon size={18} round />
              </WhatsappShareButton>
              <TelegramShareButton
                title={data.title}
                url={`${window.location.href}/${data.id}`}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={18} round />
              </TelegramShareButton>
              <FacebookShareButton
                url={`${window.location.href}/${data.id}`}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={18} round />
              </FacebookShareButton>
              <ViberShareButton
                title={data.title}
                url={`${window.location.href}/${data.id}`}
                className="Demo__some-network__share-button"
              >
                <ViberIcon size={18} round />
              </ViberShareButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
