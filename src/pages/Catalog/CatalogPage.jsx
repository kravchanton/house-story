import React, {useEffect} from "react";

import img1 from "../../assets/Rectangle 123.jpg";

import styles from "./CatalogPage.module.scss";
import {CatalogContainer, Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {CatalogQuiz} from "../../components/Catalog/CatalogQuiz";
import {BlockWrapper} from "../../containers/BlockWrapper";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalogPage} from "./../../bll/catalogPageReducer";

export const CatalogPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCatalogPage());
  }, []);
  let data = useSelector((state) => state.catalogPage.catalogPage);
  console.log(data)
  return (
    <main className={styles.main}>
      {data &&  <Container>
        <NavigationHeader />
        <MainForm data={data[0].attributes.mainForm}/>
        <CatalogContainer />
        <CatalogQuiz numberQuiz={2}/>
        <div className={styles.topWrapper}>
          <BlockWrapper
            title="Топ выполненных объектов"
            subtitle="Показываем процесс работы изнутри, делимся результатами, опытом, полезными фишками"
            top={true}
          ></BlockWrapper>
        </div>

        <Garanties title={true} />
        <div className={styles.wrapperMedia}>
          <BlockWrapper
            video={true}
            video1={true}
            video2={true}
            video3={true}
            btn={true}
            title="Видеоблог"
            subtitle="Снимаем для вас интересные ролики, в которых делимся полезной информацией"
          ></BlockWrapper>
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
          ></BlockWrapper>
        </div>

        <Excursion cloudImg={true} houseImg={true} />
      </Container>}
    </main>
  );
};
