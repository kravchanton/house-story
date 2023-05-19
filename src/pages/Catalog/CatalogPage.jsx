import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCatalogPage } from "../../bll/reducers/catalogPageReducer";

import styles from "./CatalogPage.module.scss";

import {
  CatalogContainer,
  Container,
  Excursion,
  Garanties,
  MainForm,
  TopObject,
  BlockArticle,
  BlockVideo,
} from "../../components";
import { CatalogQuiz } from "../../components/Catalog/CatalogQuiz";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogPage());
  }, []);
  let data = useSelector((state) => state.catalogPage.catalogPage);

  return (
    <main className={styles.main}>
      {data && (
        <Container>
          <MainForm />
          <CatalogContainer />
          <CatalogQuiz numberQuiz={data.attributes.quizNumber} />
          <TopObject />
          <Garanties title={true} />
          <BlockVideo />
          <BlockArticle />
          <Excursion cloudImg={true} houseImg={true} />
        </Container>
      )}
    </main>
  );
};
