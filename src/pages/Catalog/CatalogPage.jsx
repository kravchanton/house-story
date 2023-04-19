import React from "react";

import img1 from "../../assets/Rectangle 123.jpg";

import styles from "./CatalogPage.module.scss";
import {
  Container,
  MainForm,
  CatalogContainer,
  NavigationHeader,
  Garanties,
  Excursion,
} from "../../components";
import { BlockWrapper } from "../../containers";

export const CatalogPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <NavigationHeader />
        <MainForm />
        <CatalogContainer />
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
      </Container>
    </main>
  );
};
