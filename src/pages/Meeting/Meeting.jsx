import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeetingData } from "../../bll/meetingReducer";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";

import styles from "./Meeting.module.scss";
import {
  // Basic,
  Container,
  Excursion,
  Garanties,
  MainForm,
  MenuButton,
  Quiz,
  TopObject,
  VideoLink,
} from "../../components";
import { ArrowVariant, CheckVariant } from "../../icons";

export const Meeting = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.meetingData?.meetingData?.attributes
  );

  useEffect(() => {
    dispatch(fetchMeetingData());
  }, [dispatch]);

  console.log(data);

  return (
    <section className={styles.meeting}>
      {data && (
        <Container className={styles.meetingContainer}>
          <MainForm />
          <div className={styles.gifts}>
            <div className={styles.textBlock}>
              <h3 className={classNames("titleBlock", styles.firstText)}>
                Что вы получите по результатам встречи
              </h3>
              <p className={styles.secondText}>
                В течение 2 суток после встречи, мы предоставляем вам{" "}
                <span>БЕСПЛАТНЫЙ расчёт стоимости</span> работ в 2-3 вариантах
                цены.
              </p>
              <p className={styles.secondText}>
                При заказе работ, вы дополнительно получите:
              </p>
            </div>
            <div className={styles.giftsBlock}>
              {data.giftItem.map((item) => (
                <div className={styles.gift} key={item.id}>
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${item.icon.data.attributes.url}`}
                    alt=""
                  />
                  <p className={styles.desc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Quiz numberQuiz={data.quizNumber} />
          <div className={styles.visual}>
            <h3 className={classNames(styles.titleBlock, styles.visualTitle)}>
              3D визуализация поможет
            </h3>
            <div className={styles.visualItems}>
              {data.visual.map((item) => (
                <div className={styles.item} key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.objWrapper}>
            <TopObject />
            <Garanties title="Мы берем на себя полную материальную ответственность и прописываем гарантии" />
          </div>

          <div className={styles.wrapperExample}>
            <h3 className={classNames("titleBlock", styles.titleBlock)}>
              Пример выезда на объект заказчика{" "}
            </h3>
            <div className={styles.mediaContent}>
              <img
                className={styles.mainPhoto}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.exampleMeeting.mainPhoto.data.attributes.url}`}
                alt=""
              />
              <div className={styles.photoGroup}>
                {data.exampleMeeting.photoGroup.data.map((photo) => (
                  <img
                    key={photo.id}
                    className={styles.photo}
                    src={`${process.env.REACT_APP_UPLOAD_URL}${photo.attributes.url}`}
                    alt=""
                  />
                ))}
              </div>
              <div className={styles.videoGroup}>
                {data.exampleMeeting.videoGroup.map((item) => (
                  <VideoLink
                    classNameWrapper={styles.videoWrapper}
                    key={item.id}
                    poster={`${process.env.REACT_APP_UPLOAD_URL}${item.poster.data.attributes.url}`}
                    src={
                      item?.video?.data?.attributes?.url &&
                      `${process.env.REACT_APP_UPLOAD_URL}${item?.video?.data?.attributes?.url}`
                    }
                    youtubeLink={item.youtubeLink}
                  />
                ))}
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.textWrapper}>
                <h3 className={styles.textTitle}>
                  Мы предоставляем качественные услуги и работаем только с
                  опытными специалистами:
                </h3>
                <div className={styles.descWrapper}>
                  {data.specialist.specialistItem.map((item) => (
                    <div className={styles.description} key={item.id}>
                      <CheckVariant className={styles.checkIcon} />
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    </div>
                  ))}
                </div>
              </div>
              <img
                className={styles.meetingImg}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.specialist.photo.data.attributes.url}`}
              />
            </div>
            <div className={styles.actions}>
              <h3 className={classNames(styles.textTitle, styles.actionsTitle)}>
                Запишитесь на БЕСПЛАТНУЮ встречу в удобное для вас время и
                получите ответы на интересующие вас вопросы.
              </h3>
              <MenuButton
                classNameForBtn={styles.wrapperBtn}
                title="Записаться"
                className={styles.btn}
              />
              <ArrowVariant className={styles.arrow} />
            </div>
            <Excursion houseImg={true} cloudImg={true} />

            {/*  <div className={styles.contacts}>*/}
            {/*    <p className={styles.contactsTitle}>{data.contacts.title}</p>*/}
            {/*    <p className={styles.visualSubtitle}>{data.contacts.subtitle}</p>*/}
            {/*    <Basic*/}
            {/*      className={styles.contactsFormWrapper}*/}
            {/*      classNameForm={styles.contactsForm}*/}
            {/*      classNameInput={styles.contactsFormInput}*/}
            {/*      classNameSelect={styles.contactsFormSelect}*/}
            {/*      classNameForTextarea={styles.contactsFormTextarea}*/}
            {/*      inputVariant={true}*/}
            {/*      classNameForBtn={styles.contactsFormBtn}*/}
            {/*      btnText="Записаться"*/}
            {/*      lockText={true}*/}
            {/*    />*/}
            {/*  </div>*/}
          </div>
        </Container>
      )}
    </section>
  );
};
