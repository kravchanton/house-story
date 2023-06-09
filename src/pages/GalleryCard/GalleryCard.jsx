import React, {useEffect, useRef, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {fetchPhotoGallery} from "../../bll/reducers/photoReducer";
import {fetchMainForm} from "../../bll/reducers/mainFormReducer";

import styles from "./GalleryCard.module.scss";

import {BlockArticle, BlockVideo, Container, Excursion, MenuButton, TopObject,} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {Images} from "./Images";

export const GalleryCard = () => {
  useEffect(() => {
    dispatch(fetchMainForm());
  }, []);
  let links = useSelector((state) => state.mainForm.mainForm);

  useEffect(() => {
    dispatch(fetchPhotoGallery());
  }, []);
  const ImagesRef = useRef(null);
  let idCard = useParams();
  const dispatch = useDispatch();
  let cardData;
  let data = useSelector((state) => state.photo.photo);
  data?.map((t) =>
    t.attributes.project.filter((item) =>
      item.id == idCard.id ? (cardData = item) : ""
    )
  );
  const changeFolder = (index) => {
    ImagesRef.current.scrollIntoView({ behavior: "smooth" });
    setFolder(index);
  };
  const [folder, setFolder] = useState(0);
  const [addition, setAddition] = useState(0);
  return (
    <section className={styles.galleryCard}>
      {cardData && (
        <Container>
          <h1 className={styles.title}>{cardData.title}</h1>
          <div className={styles.about}>
            <img
              className={styles.plan}
              src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.mainPhoto?.data?.attributes?.url}`}
              alt="plan"
            />
            <div className={styles.buttonsBlock}>
              <img
                className={styles.imageFloor}
                src={`${process.env.REACT_APP_UPLOAD_URL}${cardData.item[folder].photos.data[0].attributes?.url}`}
                alt="firstimg"
              />
              {cardData.item.map((t, index) => (
                <div
                  key={index}
                  className={styles.buttn}
                  onClick={() => changeFolder(index)}
                >
                  <MenuButton
                    classNameForBtn={styles.btnWrapper}
                    className={
                      folder === index
                        ? `${styles.NavigationButton} ${styles.active}`
                        : styles.NavigationButton
                    }
                    title={t.title}
                  />
                </div>
              ))}

              <NavLink to={cardData.mapLink}>
                {" "}
                <MenuButton
                  classNameForBtn={styles.btnWrapper}
                  className={styles.btnTransparent}
                  title="На карте"
                />
              </NavLink>
              <NavLink to={cardData.watchObjectLink}>
              <MenuButton
                classNameForBtn={styles.btnWrapper}
                className={styles.btn}
                title="Смотреть объект"
              />
              </NavLink>
              <NavLink to={cardData.contactsLink
              }>

              <MenuButton
                classNameForBtn={styles.btnWrapper}
                className={styles.btn}
                title="Написать прорабу"
              />
              </NavLink>

            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.buttonBlock}>
              {cardData?.addition?.slice(0, 3).map((t, index) => (
                <div key={index} onClick={() => setAddition(index)}>
                  <MenuButton
                    title={t.title}
                    className={
                      addition === index
                        ? `${styles.buttonAction} ${styles.active}`
                        : styles.buttonAction
                    }
                  />
                  <div
                    className={
                      addition === index
                        ? styles.textBlockMobile
                        : styles.hidden
                    }
                  >
                    <div>
                      <p className={styles.text}>
                        <ReactMarkdown>
                          {cardData?.addition[addition]?.descr}
                        </ReactMarkdown>
                      </p>
                    </div>

                    <div className={styles.socials}>
                      <p className={styles.titleSocials}>
                        Напишите в удобный для вас месенжер и мы
                        проконсультируем вас по всем вопросам.
                      </p>
                      <div className={styles.socialsWrapper}>
                        {links?.attributes?.socialForm?.socialLinks.map(
                          (item) => (
                            <a
                              className={styles.link}
                              key={item.id}
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={`${process.env.REACT_APP_UPLOAD_URL}${item?.icon?.data?.attributes?.url}`}
                                alt=""
                              />
                              <p>{item.title}</p>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <NavLink to={cardData.documentsLink}>
                {" "}
                <MenuButton title="Документы" className={styles.buttonAction} />
              </NavLink>
            </div>
            <div className={styles.textBlock}>
              <div>
                <p className={styles.text}>
                  <ReactMarkdown>
                    {cardData?.addition[addition]?.descr}
                  </ReactMarkdown>
                </p>
              </div>

              <div className={styles.socials}>
                <p className={styles.titleSocials}>
                  Напишите в удобный для вас месенжер и мы проконсультируем вас
                  по всем вопросам.
                </p>
                <div className={styles.socialsWrapper}>
                  {links?.attributes?.socialForm?.socialLinks.map((item) => (
                    <a
                      className={styles.link}
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`${process.env.REACT_APP_UPLOAD_URL}${item?.icon?.data?.attributes?.url}`}
                        alt=""
                      />
                      <p>{item.title}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.photoBlock} ref={ImagesRef}>
            <Images
              data={cardData.item[folder].photos.data}
              galleryID="my-test-gallery"
            />
          </div>

          <TopObject />
          <BlockVideo />
          <BlockArticle />
          <Excursion cloudImg={true} houseImg={true} />
        </Container>
      )}
    </section>
  );
};
