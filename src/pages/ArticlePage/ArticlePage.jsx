import React, {useEffect, useRef} from "react";
import classNames from "classnames";

import styles from "./ArticlePage.module.scss";


import {Container, Excursion, Garanties, MainForm, NavigationArticle, VideoLink,} from "../../components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlog} from "../../bll/blogReducer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'https://esm.sh/rehype-raw@6'
import {Images} from "./Images";
import {TopObject} from "../../components/TopObject/TopObject";
import {BLockArticle} from "../../components/BlockArticle/BlockArticle";
import {BlockVideo} from "../../components/BlockVideo/BlockVideo";

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
                        <div className={styles.content}>
                            {cardData?.videos?.slice(0, 2).map((t, index) => <VideoLink
                                    key={index}
                                    title={t.title}
                                    author={t.author}
                                    classNameWrapper={styles.wrapper}
                                    youtubeLink={t.youtubeLink}
                                    src={t?.video?.data?.attributes?.name && `${process.env.REACT_APP_UPLOAD_URL}${t?.video?.data?.attributes?.url}`}
                                    poster={`${process.env.REACT_APP_UPLOAD_URL}${t?.image?.data?.attributes?.url}`}
                                />
                            )}
                        </div>
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
                <BlockVideo />
                <BLockArticle/>
                <Excursion cloudImg={true} houseImg={true}/>
            </Container>}
        </section>
    );
};
