import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import poster from "../../assets/poster.png";

import styles from "./BlockWrapper.module.scss";
import { MenuButton } from "../../components";

export const BlockWrapper = ({
  title,
  subtitle,
  image1,
  nameCard1,
  readingDuration1,
  image2,
  nameCard2,
  readingDuration2,
  image3,
  nameCard3,
  readingDuration3,
  readText,
  btn,
  article,
  video,
}) => {
  return (
    <section className={styles.section}>
      <h3 className={classNames("titleBlock", styles.title)}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.content}>
        {article && (
          <>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image1} alt="" />
              <h4 className={styles.name}>{nameCard1}</h4>
              <p className={styles.duration}>{readingDuration1}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image2} alt="" />
              <h4 className={styles.name}>{nameCard2}</h4>
              <p className={styles.duration}>{readingDuration2}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image3} alt="" />
              <h4 className={styles.name}>{nameCard3}</h4>
              <p className={styles.duration}>{readingDuration3}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
          </>
        )}
        {video && (
          <>
            <NavLink to="#">
              <video
                width="500"
                height="329"
                controls
                className={styles.video}
                poster={poster}
              >
                <source src="./../assets/video.mp4" type="video.mp4" />
              </video>
            </NavLink>
          </>
        )}
      </div>

      {btn && (
        <MenuButton className={styles.btnFloor} title="Написать в телеграм" />
      )}
    </section>
  );
};
