import React from "react";

import styles from "./PhotoItemAbout.module.scss";
import { AboutGallery } from "../AboutGallery";
import { NavLink } from "react-router-dom";
import { MenuButton } from "../MenuButton";

export const PhotoItemAbout = ({
  activeOffice,
  isActiveOffice,
  title,
  buttonLink,
  buttonText,
}) => {
  console.log(isActiveOffice);
  return (
    <div className={styles.wrapper}>
      <button onClick={() => activeOffice()}>
        <MenuButton
          classNameForBtn={styles.btnContent}
          className={styles.btnContentInner}
          title={title}
        />
      </button>
      {isActiveOffice && (
        <>
          <AboutGallery isActiveOffice={isActiveOffice} />

          <NavLink to={buttonLink}>
            <MenuButton title={buttonText} className={styles.btn} />
          </NavLink>
        </>
      )}
    </div>
  );
};
