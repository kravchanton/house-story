import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";

import styles from "./GratitudeForm.module.scss";

import hand from "../../assets/hand.png";

import {
  Container,
  Excursion,
  MenuButton,
  OurProjects,
  VideoLink,
} from "../../components";

import { fetchGratitudeForm } from "../../bll/gratitudeFormReducer";

export const GratitudeForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gratitudeForm.gratitudeForm);

  useEffect(() => {
    dispatch(fetchGratitudeForm());
  }, []);
  return (
    <section className={styles.wrapper}>
      {data && (
        <Container>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <ReactMarkdown className={styles.desc}>
                {data.attributes.text}
              </ReactMarkdown>
              <p className={styles.subdesc}>Если не хотите ждать, пишите</p>
              <div className={styles.socials}>
                {data.attributes.social.map((item) => (
                  <a key={item.id} href={item.link}>
                    <img
                      src={`${process.env.REACT_APP_UPLOAD_URL}${item.icon.data.attributes.url}`}
                      alt=""
                    />
                  </a>
                ))}
              </div>
              <div className={styles.info}>
                <img src={hand} alt="" />
                <p>Мы публикуем много полезной информации</p>
              </div>
              <a href={data.attributes.buttonLink}>
                <MenuButton
                  className={styles.btn}
                  title={data.attributes.buttonText}
                >
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${data.attributes.buttonIcon.data.attributes.url}`}
                    alt=""
                  />
                </MenuButton>
              </a>
            </div>
            <VideoLink
              classNameWrapper={styles.videoWrapper}
              poster={`${process.env.REACT_APP_UPLOAD_URL}${data.attributes.poster.data.attributes.url}`}
              youtubeLink={
                data.attributes.youtubeLink && data.attributes.youtubeLink
              }
              src={
                data.attributes.video.data &&
                `${process.env.REACT_APP_UPLOAD_URL}${data.attributes.video.data.attributes.url}`
              }
            />
          </div>
          <OurProjects />
          <Excursion houseImg={true} cloudImg={true} />
        </Container>
      )}
    </section>
  );
};
