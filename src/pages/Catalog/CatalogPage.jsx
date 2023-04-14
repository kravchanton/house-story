import React from "react";

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
        <BlockWrapper
          title="Топ выполненных объектов"
          subtitle="Показываем процесс работы изнутри, делимся результатами, опытом, полезными фишками"
        >
          <div>Hello</div>
        </BlockWrapper>
        <BlockWrapper
          title="Видеоблог"
          subtitle="Снимаем для вас интересные ролики, в которых делимся полезной информацией"
        >
          <div className={styles.content}>Hello</div>
        </BlockWrapper>
        <BlockWrapper
          title="Статьи"
          subtitle="Пишем для вас полезные статьи, основанные на реальном опыте и многолетней практике"
        >
          <div className={styles.content}>Hello</div>
        </BlockWrapper>
        <Garanties />
        <Excursion />
      </Container>
    </main>
  );
};
