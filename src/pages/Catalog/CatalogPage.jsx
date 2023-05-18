import React, { useEffect } from "react";

import styles from "./CatalogPage.module.scss";
import {
  CatalogContainer,
  Container,
  Excursion,
  Garanties,
  MainForm,
  NavigationHeader,
  TopObject,
} from "../../components";
import { CatalogQuiz } from "../../components/Catalog/CatalogQuiz";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogPage } from "../../bll/reducers/catalogPageReducer";
import { BlockArticle } from "../../components/BlockArticle/BlockArticle";
import { BlockVideo } from "../../components/BlockVideo/BlockVideo";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogPage());
  }, []);
  let data = useSelector((state) => state.catalogPage.catalogPage);
  console.log(data);
  return (
    <main className={styles.main}>
      {data && (
        <Container>
          <NavigationHeader />
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
