import React, {useEffect, useState} from "react";
import styles from "./TopObject.module.scss";
import {MenuButton} from "../MenuButton";
import {HouseVariant} from "../../icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {SlideTop} from "../SlideTop";
import {SliderBtn} from "../SliderBtn";
import {useDispatch, useSelector} from "react-redux";
import {fetchTopObject} from "../../bll/topObjectReducer";
import classNames from "classnames";


export const TopObject = () => {
    const [folder, setFolder] = useState(0);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopObject());
    }, []);
    let data = useSelector((state) => state.topObject.topObject);
    console.log(data);
    return (    <section className={classNames(styles.section)}>
        <div>
            <h3 className={classNames("titleBlock", styles.title)}>Топ выполненных объектов</h3>
            <p className={styles.subtitle}>Показываем процесс работы изнутри, делимся результатами, опытом, полезными фишками</p>
        </div>

        <div className={styles.content}> {data && <>
            <div className={styles.buttons}>
                {data.map((t, index) => (
                    <div key={index} onClick={() => setFolder(index)}>
                        <MenuButton
                            className={folder === index
                                ? `${styles.NavigationButton} ${styles.active}`
                                : styles.NavigationButton}
                            title={t.attributes.title}
                        >
                            <HouseVariant className={styles.icon}/>
                        </MenuButton>
                    </div>
                ))}
            </div>
            <Swiper className="mySwiper" slidesPerView={1}>
                {data[folder].attributes.object.map((t, index) => (
                    <SwiperSlide key={index}>
                        <SlideTop
                            img={`${process.env.REACT_APP_UPLOAD_URL}${t?.mainPhoto?.data?.attributes?.url}`}
                            data={t}
                        />
                    </SwiperSlide>
                ))}
                <div className={styles.buttonsBlock}>
                    <SliderBtn icon={true} direction="next"/>
                    <SliderBtn icon={true} direction="prev"/>
                </div>
            </Swiper>
        </>}
        </div>

    </section>)
}