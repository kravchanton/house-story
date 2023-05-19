import React, { useEffect } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "https://esm.sh/rehype-raw@6";

import { fetchBlockVideo } from "../../bll/reducers/blockVideoReducer";

import styles from "./VideoBlog.module.scss";

import { Container, Excursion, VideoLink, BlockVideo } from "../../components";

import { NavigationVideo } from "./NavigationVideo";

export const VideoBlog = () => {
  let idCard = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlockVideo());
  }, []);
  let data = useSelector((state) => state?.blockVideo?.blockVideo?.attributes);

  let cardData;
  data?.video?.map((t) => (t.id == idCard.id ? (cardData = t) : ""));

  return (
    <section className={styles.container}>
      {cardData && (
        <Container>
          <h3 className={classNames("titleBlock", styles.title)}>ВИДЕО-БЛОГ</h3>
          <div className={styles.content}>
            <NavigationVideo cardData={cardData} />

            <div className={styles.desc}>
              <h3 className={classNames("titleBlock", styles.descTitle)}>
                {cardData.title}
              </h3>
              <div className={styles.content}>
                <VideoLink
                  title={cardData.title}
                  author={cardData.author}
                  position={cardData.position}
                  classNameWrapper={styles.wrapper}
                  youtubeLink={cardData.youtubeLink}
                  src={
                    cardData?.video?.data?.attributes?.name &&
                    `${process.env.REACT_APP_UPLOAD_URL}${cardData?.video?.data?.attributes?.url}`
                  }
                  poster={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.image?.data?.attributes?.url}`}
                />
              </div>
              <div className={styles.textBlock}>
                <h3 className={styles.titleText}>{cardData.descrTitle}</h3>
                <div className={styles.descText}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {cardData.descr}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <BlockVideo />
          </div>

          <Excursion cloudImg={true} houseImg={true} />
        </Container>
      )}
    </section>
  );
};
