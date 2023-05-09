import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchOurProject } from "../../bll/ourProjectReducer";

import styles from "./OurProjects.module.scss";

import { MenuButton } from "../MenuButton";

export const OurProjects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOurProject());
  }, []);
  let data = useSelector((state) => state.ourProject.ourProject);
  console.log(data);
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Наши проекты</h3>
      <div className={styles.projectsWrapper}>
        {data &&
          data.attributes.cardObject.map((card) => (
            <div key={card.id} className={styles.projectCard}>
              <h4>{card.title}</h4>
              <div className={styles.desc}>
                <h5>{card.square} м²</h5>
                <h5>{card.price} ₽</h5>
              </div>
              <img
                className={styles.image}
                src={`${process.env.REACT_APP_UPLOAD_URL}${card.photo.data.attributes.url}`}
                alt=""
              />
              <div className={styles.buttons}>
                <NavLink
                  className={styles.btnWrapper}
                  to={card.fitstButtonLink}
                >
                  <MenuButton className={styles.btn} title="Подробнее" />
                </NavLink>
                <NavLink to={card.secondButtonLink}>
                  <MenuButton className={styles.btn} title="На карте" />
                </NavLink>
              </div>
            </div>
          ))}
      </div>
      <NavLink to={data?.attributes?.buttonLink}>
        <MenuButton
          title={data?.attributes?.buttonText}
          classNameForBtn={styles.buttonWrapper}
          className={styles.button}
        />
      </NavLink>
    </section>
  );
};
