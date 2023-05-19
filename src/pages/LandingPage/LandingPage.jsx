import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLandingPage } from "../../bll/reducers/landingPageReducer";

import styles from "./LandingPage.module.scss";

import {
  Container,
  Excursion,
  MainFormVariant,
  OurProjects,
  Quiz,
} from "../../components";

export const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLandingPage());
  }, []);
  let data = useSelector((state) => state.landingPage.landingPage);

  return (
    <section className={styles.wrapper}>
      {data && (
        <Container>
          {data.attributes.form && <MainFormVariant />}
          {data.attributes.quiz && (
            <Quiz numberQuiz={data.attributes.quizNumber} />
          )}
          {data.attributes.ourProjects && <OurProjects />}
          {data.attributes.excursion && (
            <Excursion houseImgVariant={true} descWrapperVariant={true} />
          )}
        </Container>
      )}
    </section>
  );
};
