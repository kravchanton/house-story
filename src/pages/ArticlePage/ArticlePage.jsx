import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import styles from "./ArticlePage.module.scss";

import {
  Container,
  Excursion,
  Garanties,
  MainForm,
  MenuButton,
  NavigationArticle,
  VideoLink,
} from "../../components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../bll/reducers/blogReducer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Images } from "./Images";
import { TopObject } from "../../components/TopObject/TopObject";
import { BlockVideo } from "../../components/BlockVideo/BlockVideo";
import { BlockArticle } from "../../components/BlockArticle/BlockArticle";

export const ArticlePage = () => {
  useEffect(() => {
    dispatch(fetchBlog());
  }, []);
  const [count, setCount] = useState(null);
  let idCard = useParams();
  const dispatch = useDispatch();
  let cardData;
  let data = useSelector((state) => state.blog.blog);
  data?.map((t) =>
    t.attributes.item.filter((item) =>
      item.id == idCard.id ? (cardData = item) : ""
    )
  );
  console.log(cardData);
  const Refs = useRef([]);
  const RefsFirst = useRef(null);
  const scroll = (index) => {
    if (index == "first") {
      RefsFirst.current.scrollIntoView({ behavior: "smooth" });
    } else Refs?.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.article}>
      {cardData && (
        <Container>
          <MainForm />
          <h3 className={classNames("titleBlock", styles.title)}>Статьи</h3>
          <div className={styles.content}>
            <NavigationArticle scroll={scroll} cardData={cardData} />
            <div className={styles.desc}>
              <h3 className={classNames("titleBlock", styles.descTitle)}>
                {cardData.title}
              </h3>
              <Garanties
                classNameCard={styles.garanties}
                title={false}
                garantiesVar={true}
              />
              <div ref={RefsFirst} className={styles.textBlock}>
                <h3 className={styles.titleText}>{cardData.descrTitle}</h3>
                <div className={styles.descText}>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {cardData.descr}
                  </ReactMarkdown>
                </div>
              </div>
              <div className={styles.content}>
                {cardData?.videos?.slice(0, 2).map((t, index) => (
                  <VideoLink
                    key={index}
                    title={t.title}
                    author={t.author}
                    classNameWrapper={styles.wrapper}
                    youtubeLink={t.youtubeLink}
                    src={
                      t?.video?.data?.attributes?.name &&
                      `${process.env.REACT_APP_UPLOAD_URL}${t?.video?.data?.attributes?.url}`
                    }
                    poster={`${process.env.REACT_APP_UPLOAD_URL}${t?.image?.data?.attributes?.url}`}
                  />
                ))}
              </div>
              {cardData.section.map((t, index) => (
                <div
                  key={index}
                  ref={(el) => (Refs.current[index] = el)}
                  className={styles.textBlock}
                >
                  <h3 className={styles.titleText}>
                    {t.stage} <span>{t.title}</span>
                  </h3>
                  <div className={styles.descText}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {t.descr}
                    </ReactMarkdown>
                  </div>
                  <div className={styles.images}>
                    <Images data={t.photos.data} galleryID="my-test-gallery" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contentMobile}>
            <div className={styles.desc}>
              <h3 className={classNames("titleBlock", styles.descTitle)}>
                {cardData.title}
              </h3>
              <div onClick={() => setCount(11)}>
                <MenuButton
                  className={styles.butns}
                  title={cardData.descrTitle}
                />
                <div
                  className={count === 11 ? styles.textBlock : styles.hidden}
                >
                  <div className={styles.descText}>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {cardData.descr}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
              {cardData.section.map((t, index) => (
                <div
                  key={index}
                  onClick={() => setCount(index)}
                  className={styles.textBlock}
                >
                  <MenuButton className={styles.butns} title={t.title} />
                  <div
                    className={
                      count === index ? styles.textBlock : styles.hidden
                    }
                  >
                    <div className={styles.descText}>
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {t.descr}
                      </ReactMarkdown>
                    </div>

                    <div className={styles.images}>
                      <Images
                        data={t.photos.data}
                        galleryID="my-test-gallery"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
