import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchBlockArticle } from "../../bll/reducers/blockAtricleReducer";

import "swiper/css";

import styles from "./BlockWrapper.module.scss";

import { MenuButton } from "../MenuButton";

export const BlockArticle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlockArticle());
  }, []);
  let data = useSelector(
    (state) => state?.blockArticle?.blockArticle?.attributes
  );
  return (
    <section className={classNames(styles.section)}>
      {data && (
        <>
          <div>
            <h3 className={classNames("titleBlock", styles.title)}>
              {data.title}
            </h3>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>

          <div className={styles.content}>
            {data.items.slice(0, 3).map((t, index) => (
              <NavLink key={index} className={styles.card} to={t.link}>
                <img
                  className={styles.img}
                  src={`${process.env.REACT_APP_UPLOAD_URL}${t?.image?.data?.attributes?.url}`}
                  alt=""
                />
                <div className={styles.poster}>
                  <h4 className={styles.name}>{t.title}</h4>
                  <div className={styles.durationWrapper}>
                    <p className={styles.duration}>{t.time}</p>
                    <p className={styles.read}>Читать ⟶</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <NavLink to={data.buttonLink}>
            {" "}
            <MenuButton className={styles.btnFloor} title={data.buttonText} />
          </NavLink>
        </>
      )}
    </section>
  );
};
