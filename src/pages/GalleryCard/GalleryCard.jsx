import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Pagination, usePagination} from "pagination-react-js"
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// Import Swiper styles
import instagram from "../../assets/inst.png";
import facebook from "../../assets/facebook-logo.png";

import styles from "./GalleryCard.module.scss";

import {Container, MenuButton} from "../../components";
import {MailSocials, PhoneSocials, Telegram, Viber, WhatsUp,} from "../../icons";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotoGallery} from "../../bll/photoReducer";
import {TopObject} from "../../components/TopObject/TopObject";
import {BLockArticle} from "../../components/BlockArticle/BlockArticle";

export const GalleryCard = () => {
  const {currentPage, entriesPerPage, entries} = usePagination(1, 6);

  useEffect(() => {
    dispatch(fetchPhotoGallery());
  }, []);

  let idCard = useParams();
  const dispatch = useDispatch();
  let cardData
  let data = useSelector((state) => state.photo.photo);
  data?.map(t => (t.attributes.project.filter(item => item.id == idCard.id ? cardData = item : '')))
  console.log(cardData)
  const [folder, setFolder] = useState(0)

  const [open, setOpen] = useState(false)
  const openLightBox = () => {
    setOpen(true)
  }
  const thumbnailsRef = React.useRef(null);
  let src = 'src'
  let slides = []
  cardData?.item[folder]?.photos?.data?.map(t => slides.push({[src]: `${process.env.REACT_APP_UPLOAD_URL}${t.attributes.url}`}))

  return (
    <section className={styles.galleryCard}>
      {cardData && <Container>
        <h1 className={styles.title}>{cardData.title}</h1>
        <div className={styles.about}>
          <img className={styles.plan} src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.mainPhoto?.data?.attributes?.url}`} alt="plan" />
          <div className={styles.buttonsBlock}>
            <img className={styles.imageFloor} src={`${process.env.REACT_APP_UPLOAD_URL}${cardData.item[folder].photos.data[0].attributes?.url}`} alt="firstimg" />
            {cardData.item.map((t,index) => <div key={index} className={styles.buttn} onClick={()=> setFolder(index)}><MenuButton
                    classNameForBtn={styles.btnWrapper}
                    className={
                      folder === index
                          ? `${styles.NavigationButton} ${styles.active}`
                          : styles.NavigationButton
                    }
                    title={t.title}
                /></div>
            )}


            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btnTransparent}
              title="На карте"
            />
            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="Смотреть объект"
            />

            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="Написать прорабу"
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.buttonBlock}>
            <MenuButton title="Описание" className={styles.buttonAction} />
            <MenuButton title="Вложения" className={styles.buttonAction} />
            <MenuButton title="Доход" className={styles.buttonAction} />
            <MenuButton title="Документы" className={styles.buttonAction} />
          </div>
          <div className={styles.textBlock}>
            <div>
              <p className={styles.text}>
                {cardData.description}
              </p>

            </div>

            <div className={styles.socials}>
              <p className={styles.titleSocials}>
                Напишите в удобный для вас месенжер и мы проконсультируем вас по
                всем вопросам.
              </p>
              <div className={styles.socialsWrapper}>
                <NavLink className={styles.link} to="#">
                  <PhoneSocials />
                  <p>Звонок</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <MailSocials />
                  <p>Почта</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <WhatsUp />
                  <p>WhatsApp</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <Viber />
                  <p>Viber</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <Telegram />
                  <p>Telegram</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <img
                    className={styles.icon}
                    src={instagram}
                    alt="instagram"
                  />
                  <p>Instagram</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <img className={styles.icon} src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </NavLink>

              </div>
            </div>
          </div>

        </div>
        <div className={styles.photoBlock}>



              <div className={styles.gallery}> {cardData.item[folder].photos.data.slice(entries.indexOfFirst, entries.indexOfLast).map((t, index)=> <img onClick={() => openLightBox(index)} key={index} className={styles.images} src={`${process.env.REACT_APP_UPLOAD_URL}${t.attributes?.url}`} alt="image" />
              )} </div>
          <div className={styles.wrap}> <Pagination
                entriesPerPage={entriesPerPage.get}
                totalEntries={cardData.item[folder].photos.data.length}
                currentPage={{get: currentPage.get, set: currentPage.set}}
                offset={3}
                classNames={{
                  wrapper: "pagination m-auto",
                  item: "pagination-item",
                  itemActive: "pagination-item-active",
                  navPrev: "pagination-item nav-item",
                  navNext: "pagination-item nav-item",
                  navStart: "pagination-item nav-item",
                  navEnd: "pagination-item nav-item",
                  navPrevCustom: "pagination-item",
                  navNextCustom: "pagination-item"
                }}
                showFirstNumberAlways={true}
                showLastNumberAlways={true}

                navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                navPrevCustom={{
                  steps: 6,
                  content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
                }}
                navNextCustom={{
                  steps: 6,
                  content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
                }}
            />
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Thumbnails]}
                thumbnails={{ref: thumbnailsRef}}
                on={{
                  click: () => {
                    (thumbnailsRef.current?.visible
                        ? thumbnailsRef.current?.hide
                        : thumbnailsRef.current?.show)?.();
                  },
                }}
            />
          </div>
        </div>
        <TopObject/>

        <BLockArticle/>
      </Container>}
    </section>
  );
};
