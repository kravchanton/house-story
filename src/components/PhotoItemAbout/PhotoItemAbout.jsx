import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PhotoItemAbout.module.scss";

import { AboutGallery, MenuButton } from "../../components";

export const PhotoItemAbout = ({
  title,
  buttonLink,
  buttonText,
  isActiveOffice,
  activeOffice,
  isActiveProduction,
  activeProduction,
  isActiveStock,
  activeStock,
}) => {
  return (
    <>
      {activeOffice && (
        <button className={styles.btnPhotos} onClick={() => activeOffice()}>
          <MenuButton
            classNameForBtn={styles.btnContent}
            className={styles.btnContentInner}
            title={title}
          />
        </button>
      )}
      {activeProduction && (
        <button className={styles.btnPhotos} onClick={() => activeProduction()}>
          <MenuButton
            classNameForBtn={styles.btnContent}
            className={styles.btnContentInner}
            title={title}
          />
        </button>
      )}
      {activeStock && (
        <button className={styles.btnPhotos} onClick={() => activeStock()}>
          <MenuButton
            classNameForBtn={styles.btnContent}
            className={styles.btnContentInner}
            title={title}
          />
        </button>
      )}

      {isActiveOffice && (
        <div className={styles.wrapper}>
          {isActiveOffice && (
            <>
              <AboutGallery isActiveOffice={isActiveOffice} />
            </>
          )}
          <NavLink to={buttonLink}>
            <MenuButton title={buttonText} className={styles.btn} />
          </NavLink>
        </div>
      )}
      {isActiveProduction && (
        <div className={styles.wrapper}>
          {isActiveProduction && (
            <>
              <AboutGallery isActiveProduction={isActiveProduction} />
            </>
          )}
          <NavLink to={buttonLink}>
            <MenuButton title={buttonText} className={styles.btn} />
          </NavLink>
        </div>
      )}
      {isActiveStock && (
        <div className={styles.wrapper}>
          {isActiveStock && (
            <>
              <AboutGallery isActiveStock={isActiveStock} />
            </>
          )}
          <NavLink to={buttonLink}>
            <MenuButton title={buttonText} className={styles.btn} />
          </NavLink>
        </div>
      )}
    </>
  );
};
