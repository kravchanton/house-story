import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";
import favouriteHouse from "../../assets/favouriteHouse.png";
import bgFavourite from "../../assets/bgFavourite.png";

import styles from "./CatalogCard.module.scss";
import {Basic, Container, MenuButton, SliderBtn} from "../../components";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../../bll/catalogReducer";

export const CatalogCard = () => {

    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);

    let idCard = useParams();
    const dispatch = useDispatch();
    let cardData
    let data = useSelector((state) => state.catalog.catalog);
    data?.map(t => (t.attributes.item.filter(item => item.id == idCard.id ? cardData = item : '')))
    console.log(cardData)
    /*
    */

    return (
        <section className={styles.catalogCard}>
            {data && <Container className={styles.container}>
                <h1 className={styles.title}>{cardData.title}</h1>
                <article className={styles.content}>
                    <div className={styles.about}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.images}>
                                <img
                                    className={styles.mainImage}
                                    src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.mainPhoto?.data?.attributes?.url}`}
                                    alt="houseCard"
                                />
                                <div className={styles.tripleImages}>
                                    <img className={styles.imageView}
                                         src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[0]?.attributes?.url}`}
                                         alt=""/>
                                    <img className={styles.imageView}
                                         src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[1]?.attributes?.url}`}
                                         alt=""/>
                                    <NavLink className={styles.linkImageWrapper}>
                                        <img className={styles.imageView}
                                             src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[2]?.attributes?.url}`}
                                             alt=""/>
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
                                    <h4 className={styles.priceText}>{cardData.square} м²</h4>
                                    <h4 className={styles.priceText}>{cardData.price} руб</h4>
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
                                    {cardData.description}
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
                        {cardData.plans.map((t, index) => <div key={index} className={styles.section}>
                            <img
                                className={styles.floorImage}
                                src={`${process.env.REACT_APP_UPLOAD_URL}${t.mainPhoto.data?.attributes?.url}`}
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
                                        src={`${process.env.REACT_APP_UPLOAD_URL}${t?.photos?.data[0]?.attributes?.url}`}
                                        alt="firstimg"
                                    />
                                    <img
                                        src={`${process.env.REACT_APP_UPLOAD_URL}${t?.photos?.data[1]?.attributes?.url}`}
                                        alt="secondimg"/>
                                </div>
                                <MenuButton
                                    title="Подробные планировки 1 этажа"
                                    className={styles.btnFloor}
                                />
                            </div>
                        </div>)}

                    </div>
                    <div className={styles.videoExcursion}>
                        <h3 className={classNames("titleBlock", styles.titleBlock)}>
                            Видео экскурсия
                        </h3>
                        <div className={styles.videoSection}>
                            <video src="https://youtube.com/watch?v=ZDsWEApmyZI"></video>
                        </div>
                    </div>
                    <div className={styles.buildingHouse}>
                        <h3 className={classNames("titleBlock", styles.titleBlock)}>
                            Как строился дом
                        </h3>
                        <div className={styles.houseImages}>
                            {cardData?.buildings?.photos?.data?.slice(0,5).map((t,index) => {

                              return  (<img key={index}
                                    className={styles.buildingImage}
                                    src={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
                                    alt="buildingHouse"
                                />  )
                            })}

                        </div>
                        <MenuButton
                            title="Смотреть больше фото"
                            className={styles.btnFloor}
                        />
                    </div>
                    <div className={styles.favouriteHouses}>
                        <img className={styles.favouriteBg} src={bgFavourite} alt=""/>
                        <h3 className={classNames("titleBlock", styles.titleBlock)}>
                            Вам также могут понравиться
                        </h3>
                        <Swiper
                            className={styles.slider}
                            loop={true}
                            slidesPerView={2}
                            spaceBetween={40}
                        >
                            <SwiperSlide className={styles.favouriteCard}>
                                <img
                                    className={styles.favouriteImg}
                                    src={favouriteHouse}
                                    alt="favouriteHouse"
                                />
                                <div className={styles.favouriteDesc}>
                                    <h4 className={styles.descTitle}>Дом в Балашихе</h4>
                                    <div className={styles.price}>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            168,8 м²
                                        </h4>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            210000 руб
                                        </h4>
                                    </div>

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
                                    <MenuButton
                                        className={styles.btnFloor}
                                        title="Смотреть проект"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.favouriteCard}>
                                <img
                                    className={styles.favouriteImg}
                                    src={favouriteHouse}
                                    alt="favouriteHouse"
                                />
                                <div className={styles.favouriteDesc}>
                                    <h4 className={styles.descTitle}>Дом в Балашихе</h4>
                                    <div className={styles.price}>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            168,8 м²
                                        </h4>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            210000 руб
                                        </h4>
                                    </div>

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
                                    <MenuButton
                                        className={styles.btnFloor}
                                        title="Смотреть проект"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.favouriteCard}>
                                <img
                                    className={styles.favouriteImg}
                                    src={favouriteHouse}
                                    alt="favouriteHouse"
                                />
                                <div className={styles.favouriteDesc}>
                                    <h4 className={styles.descTitle}>Дом в Балашихе</h4>
                                    <div className={styles.price}>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            168,8 м²
                                        </h4>
                                        <h4
                                            className={classNames(
                                                styles.priceText,
                                                styles.favouriteText
                                            )}
                                        >
                                            210000 руб
                                        </h4>
                                    </div>

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
                                    <MenuButton
                                        className={styles.btnFloor}
                                        title="Смотреть проект"
                                    />
                                </div>
                            </SwiperSlide>
                            <SliderBtn direction="next"/>
                            <SliderBtn direction="prev"/>
                        </Swiper>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                        atque ea esse fuga, fugit, illo maiores nesciunt nihil pariatur quae
                        quos, ullam vel voluptate! A aspernatur, at aut, autem commodi
                        dolorum eligendi eos esse excepturi, facere hic illo incidunt
                        laudantium libero molestias neque officiis perspiciatis quaerat
                        quisquam quos ratione recusandae reiciendis rem repudiandae rerum
                        sed ut. Ab et laborum neque. Libero nam placeat reiciendis sunt
                        voluptatem? Aliquid aperiam, dolorum ea labore modi saepe sed.
                        Doloribus est hic nemo! Ab aliquid asperiores at consequuntur
                        doloremque eligendi et, excepturi expedita facere fugit incidunt
                        ipsa iste magnam maiores odio placeat porro quia recusandae saepe
                        similique soluta temporibus veritatis voluptatum? Aperiam
                        consequuntur corporis eius, error ex expedita fugit maiores rem.
                        Architecto aut corporis dolores, eius eos natus provident quo soluta
                        tenetur? Alias aliquid animi aperiam assumenda aut corporis cumque
                        dolorem dolorum eos error eveniet exercitationem ipsa, laborum
                        minima modi mollitia necessitatibus nisi omnis quae qui quibusdam
                        quisquam, reiciendis sequi sint sit, tempora temporibus tenetur vel
                        voluptatem voluptates. Architecto culpa ducimus earum eius ipsam
                        modi possimus provident quia quisquam quod reiciendis repellat
                        soluta, totam ut vero. At excepturi exercitationem fugiat incidunt
                        labore maiores obcaecati quibusdam voluptates? Alias, animi aperiam
                        beatae consectetur cupiditate deserunt dicta doloremque dolorum
                        error et facere fugiat illum incidunt ipsa iure minus molestias non
                        numquam odit omnis perferendis praesentium provident quaerat quasi
                        qui quod repellendus sed similique sint, sit unde velit veritatis
                        voluptatem? Ad adipisci alias aperiam delectus eaque ipsam nam,
                        quibusdam quisquam rem ullam! Ad alias aperiam culpa dolorem ea eum,
                        facere fuga ipsam molestiae nemo officiis placeat repellat
                        repudiandae sed soluta sunt tempore totam ullam veritatis voluptas?
                        Adipisci alias culpa cupiditate facilis itaque magni maxime, modi
                        necessitatibus nostrum obcaecati quas quo ratione repellat
                        repudiandae sit unde, vero voluptatum. Id illum modi nobis officia
                        quo, suscipit voluptatibus. Culpa cupiditate iusto suscipit. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                        deleniti iste mollitia nesciunt quis sequi voluptas, voluptatem!
                        Consequuntur dolor eum nobis obcaecati quas quisquam recusandae
                        soluta! A laborum pariatur quia quod sint. Aperiam culpa cumque
                        deleniti eos et ipsam ipsum numquam perspiciatis placeat quaerat qui
                        rem repellat sed sequi sit temporibus ullam, vero! Accusamus beatae,
                        consectetur corporis deleniti distinctio eaque eos error
                        exercitationem id ipsam, laborum minima nisi nostrum odit officia
                        omnis perferendis porro quam quia quidem quisquam repudiandae sed
                        soluta temporibus unde velit vero vitae voluptas voluptates
                        voluptatibus! Aliquid aspernatur, atque commodi corporis dignissimos
                        distinctio dolores error esse ipsam iure libero nisi nobis non
                        pariatur quaerat quibusdam, rerum sit tempora tenetur vel veniam
                        vero voluptate! Aliquam amet atque autem beatae consectetur corporis
                        culpa cum dolorum enim eos esse explicabo illo iure magnam,
                        mollitia, natus necessitatibus nobis officia perspiciatis quaerat
                        quas quibusdam reprehenderit saepe sapiente sed sint soluta.
                        Consequatur cum exercitationem repellendus vero voluptas? Doloribus
                        enim itaque nobis odio praesentium quas quibusdam quod sint vel
                        veritatis. Aliquam asperiores atque autem deserunt dolores eaque eum
                        illo impedit in ipsam iure iusto labore laboriosam magnam maiores
                        nihil, non, officia porro provident quas quod repellat repudiandae
                        sed sequi sunt ullam vel. Deserunt illo laboriosam molestias
                        ratione! Error fugiat magnam nihil omnis, possimus sapiente tempore.
                        Adipisci aliquam aliquid animi architecto aut beatae consequuntur
                        corporis culpa cum cupiditate distinctio doloremque esse et, eum
                        facilis fugit hic id incidunt ipsa molestiae neque nihil numquam
                        perspiciatis possimus quam, ratione similique tempora! A atque autem
                        distinctio dolores earum, error est eum fuga fugiat fugit in
                        inventore nihil odit officia placeat quam, quasi quibusdam rerum
                        sapiente similique suscipit, unde veniam voluptatem! Debitis ea eius
                        modi nesciunt porro possimus quam sed veniam vero voluptates? Ab
                        animi cumque dignissimos eos hic magnam nam non, nulla officiis quis
                        quo veniam vero voluptatem.
                    </div>
                </article>
            </Container>}
        </section>
    );
};
