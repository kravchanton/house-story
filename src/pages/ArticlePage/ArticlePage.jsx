import React, {useEffect, useRef} from "react";
import classNames from "classnames";

import styles from "./ArticlePage.module.scss";


import {Container, Excursion, Garanties, MainForm, NavigationArticle,} from "../../components";

import {BlockWrapper} from "../../containers";
import img1 from "../../assets/Rectangle 123.jpg";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlog} from "../../bll/blogReducer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'https://esm.sh/rehype-raw@6'
import {Images} from "./Images";
import {TopObject} from "../../components/TopObject/TopObject";

export const ArticlePage = () => {
    useEffect(() => {
        dispatch(fetchBlog());
    }, []);

    let idCard = useParams();
    const dispatch = useDispatch();
    let cardData
    let data = useSelector((state) => state.blog.blog);
    data?.map(t => (t.attributes.item.filter(item => item.id == idCard.id ? cardData = item : '')))
    console.log(cardData)
    const Refs = useRef([]);
    const RefsFirst = useRef(null);
    const scroll = (index) => {
        if(index == 'first') {
            RefsFirst.current.scrollIntoView({ behavior: "smooth" })
        }
        else Refs?.current[index]?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className={styles.article}>
            {cardData && <Container>
                <MainForm/>
                <h3 className={classNames("titleBlock", styles.title)}>Статьи</h3>
                <div className={styles.content}>
                    <NavigationArticle scroll={scroll} cardData={cardData}/>
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
                            <h3 className={styles.titleText}>
                                {cardData.descrTitle}
                            </h3>
                            <div className={styles.descText}>
                                {/* eslint-disable-next-line react/no-children-prop */}
                                <ReactMarkdown children={cardData.descr}rehypePlugins={[rehypeRaw]}/>
                            </div>
                        </div>
                        <BlockWrapper
                            video={true}
                            video1={true}
                            video2={true}
                            title={cardData.videoTitle}
                            classNameSection={styles.sectionWrapper}
                        />
                        {cardData.section.map((t, index) => <div key={index}  ref={el => Refs.current[index] = el} className={styles.textBlock}>
                                <h3 className={styles.titleText}>
                                    {t.stage} <span>{t.title}</span>
                                </h3>
                                <div className={styles.descText}>
                                    {/* eslint-disable-next-line react/no-children-prop */}
                                    <ReactMarkdown children={t.descr} rehypePlugins={[rehypeRaw]}/>

                                </div>
                                <div className={styles.images}>
                                   <Images data={t.photos.data} galleryID="my-test-gallery"/>

                                </div>

                            </div>
                        )}
                    </div>
                </div>

                <TopObject/>

                <div className={styles.mediaWrapper}>
                    <BlockWrapper
                        video={true}
                        video1={true}
                        video2={true}
                        video3={true}
                        btn={true}
                        title="Видеоблог"
                        subtitle="Снимаем для вас интересные ролики, в которых делимся полезной информацией"
                    />
                    <BlockWrapper
                        article={true}
                        btn={true}
                        title="Статьи"
                        subtitle="Пишем для вас полезные статьи, основанные на реальном опыте и многолетней практике"
                        image1={img1}
                        nameCard1="Как выбрать материал для дома?"
                        readingDuration1="Время на чтение: 3 минуты"
                        image2={img1}
                        nameCard2="Сколько стоит дом построить?"
                        readingDuration2="Время на чтение: 2 минуты"
                        image3={img1}
                        nameCard3="Как провести электричество в частный дом?"
                        readingDuration3="Время на чтение: 2 минуты"
                        readText="Читать"
                    />
                </div>

                <Excursion cloudImg={true} houseImg={true}/>
            </Container>}
        </section>
    );
};
