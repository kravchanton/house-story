/*
import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

import houseCard from "../../assets/houseCard.png";
import view1 from "../../assets/view1.png";
import view2 from "../../assets/view2.png";
import view3 from "../../assets/view3.png";
import firstFloor from "../../assets/first-floor.png";
import firstimg from "../../assets/firstFloorimg1.png";
import secondimg from "../../assets/firstFloorimg2.png";

import styles from "./CatalogCard.module.scss";
import {Basic, Container, MenuButton} from "../../components";

export const CatalogCard = () => {
    return (
        <section className={styles.catalogCard}>
            <Container className={styles.container}>
                <h1 className={styles.title}>Проект Дмитров</h1>
                <article className={styles.content}>
                    <div className={styles.about}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.images}>
                                <img
                                    className={styles.mainImage}
                                    src={houseCard}
                                    alt="houseCard"
                                />
                                <div className={styles.tripleImages}>
                                    <img className={styles.imageView} src={view1} alt=""/>
                                    <img className={styles.imageView} src={view2} alt=""/>
                                    <NavLink className={styles.linkImageWrapper}>
                                        <img className={styles.imageView} src={view3} alt=""/>
                                        <p className={styles.linkText}>+ 36 фото</p>
                                    </NavLink>
                                </div>
                            </div>
                            <div className={styles.form}>
                                <div className={styles.buttonBlock}>
                                    <MenuButton
                                        title="Хочу похожий дом"
                                        className={styles.buttonAction}
                                    />
                                    <MenuButton
                                        title="Пришлите мне смету"
                                        className={styles.buttonAction}
                                    />
                                    <MenuButton
                                        title="Посетить объект"
                                        className={styles.buttonAction}
                                    />
                                </div>
                                <Basic
                                    btnText="Отправить"
                                    classNameSelect={styles.selectForm}
                                    classNameInput={styles.inputForm}
                                    classNameForBtn={styles.btnForm}
                                    classNameForm={styles.contactForm}
                                    lockText={true}
                                />
                            </div>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.priceBlock}>
                                <div className={styles.price}>
                                    <h4 className={styles.priceText}>168,8 м²</h4>
                                    <h4 className={styles.priceText}>210000 руб</h4>
                                </div>
                                <p className={styles.text}>
                                    Гарантируем качество и сроки выполненных работ{" "}
                                </p>
                                <MenuButton title="Поэтапная оплата" className={styles.btn}/>
                                <ul className={styles.descHouse}>
                                    <li className={styles.propertyWrapper}>
                                        <p className={styles.text}>Этажи</p>
                                        <div></div>
                                        <p className={styles.text}>1</p>
                                    </li>
                                    <li className={styles.propertyWrapper}>
                                        <p className={styles.text}>Комнаты</p>
                                        <div></div>
                                        <p className={styles.text}>4</p>
                                    </li>
                                    <li className={styles.propertyWrapper}>
                                        <p className={styles.text}>Санузлы</p>
                                        <div></div>
                                        <p className={styles.text}>2</p>
                                    </li>
                                    <li className={styles.propertyWrapper}>
                                        <p className={styles.text}>Стиль</p>
                                        <div></div>
                                        <p className={styles.text}>европейский</p>
                                    </li>
                                </ul>
                                <MenuButton
                                    title="Смотреть на карте"
                                    className={classNames(styles.btn, styles.btnWhite)}
                                />
                            </div>
                            <div className={styles.descBlock}>
                                <h4 className={styles.listTitle}>Описание работ</h4>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>
                                        Залили свайно-ростверковый фундамент
                                    </li>
                                    <li className={styles.listItem}>
                                        Доставили весь материал (бревно из Кирова)
                                    </li>
                                    <li className={styles.listItem}>
                                        Собрали сруб (коробка дома)
                                    </li>
                                    <li className={styles.listItem}>Смонтировали кровлю</li>
                                    <li className={styles.listItem}>
                                        Произвели шлифовку оцилиндрованного бревна на следующий год
                                        (отшлифовали торцы)
                                    </li>
                                    <li className={styles.listItem}>
                                        Обработали неомидом, покрасили
                                    </li>
                                    <li className={styles.listItem}>
                                        Также на следующий год утеплили крышу и полы (положили
                                        фанеру с обрешёткой)
                                    </li>
                                    <li className={styles.listItem}>Потолок зашили вагонкой</li>
                                </ul>
                                <NavLink>
                                    <button className={styles.additionalInfo}>
                                        См. подробный кейс по ссылке
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.plan}>
                        <h3 className={classNames("titleBlock", styles.titleBlock)}>
                            План дома
                        </h3>
                        <div className={styles.section}>
                            <img
                                className={styles.floorImage}
                                src={firstFloor}
                                alt="firstFloor"
                            />
                            <div className={styles.description}>
                                <h4 className={styles.descTitle}>План 1 этажа</h4>
                                <p className={styles.text}>Кухня-гостиная: 40,0 м2</p>
                                <p className={styles.text}>Спальня: 11,3 м2</p>
                                <p className={styles.text}>Гардеробная: 9,0 м2</p>
                            </div>
                            <div className={styles.imagesBlock}>
                                <div className={styles.imagesWrapper}>
                                    <img
                                        className={styles.smallImage}
                                        src={firstimg}
                                        alt="firstimg"
                                    />
                                    <img src={secondimg} alt="secondimg"/>
                                </div>
                                <MenuButton
                                    title="Подробные планировки 1 этажа"
                                    className={styles.btnFloor}
                                />
                            </div>
                        </div>
                        <div className={styles.section}></div>
                    </div>
                    <div className={styles.videoExcursion}>
                        <h3 className={classNames("titleBlock", styles.titleBlock)}>
                            Видео экскурсия
                        </h3>
                        <div className={styles.videoSection}></div>
                    </div>
                </article>
            </Container>
        </section>
    );
};
*/
