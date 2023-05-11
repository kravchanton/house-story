import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./QuizContent.module.scss";

import { ContactForm, MenuButton, NavigationEl } from "../../components";
import { Binoculars, Calculator, WorkerVariant } from "../../icons";
import { QuizItem } from "../Quiz/QuizItem";
import { useDispatch } from "react-redux";
import { deleteLastAnswer, setAnswer } from "../../bll/AnswerReducer";
import classNames from "classnames";

export const QuizContent = ({
  questionNumber,
  questions,
  setQuestionNumber,
  increaseCount,
  decreaseCount,
  objNumber,
}) => {
  const [answer, getAnswer] = useState(null);
  let [disabledButton, setDisabledButton] = useState("disabled");

  const dispatch = useDispatch();

  const changeQuestion = () => {
    increaseCount();
    dispatch(setAnswer({ title: questions[questionNumber].title, answer }));
    setDisabledButton("disabled");
  };
  const prevQuestion = () => {
    decreaseCount();
    dispatch(deleteLastAnswer());
    setDisabledButton("");
  };

  const handleSetAnswer = (v) => {
    getAnswer(v);
    setDisabledButton("");
  };
  const navigate = useNavigate();
  const navigateToGratitude = () => {
    dispatch(setAnswer({ title: questions[questionNumber].title, answer }));
    navigate("/gratitude", { replace: true });
  };
  return (
    <>
      <h3 className={classNames("titleBlock", styles.title)}>
        Не знаете какой дом хотите построить?{" "}
      </h3>
      <p className={styles.subtitle}>
        Пройдите тест, и мы подберем для вас проект дома и рассчитаем стоимость
        строительства!
      </p>
      <div className={styles.buttonBlock}>
        <MenuButton
          classNameForBtn={styles.btnWrapper}
          className={styles.feature}
          title="Расчет стоимости в 2 вариантах"
        >
          <Calculator className={styles.icon} />
        </MenuButton>
        <MenuButton className={styles.feature} title="Бесплатный выезд прораба">
          <WorkerVariant className={styles.icon} />
        </MenuButton>
        <MenuButton
          className={styles.feature}
          title="Следите за ремонтом онлайн"
        >
          <Binoculars />
        </MenuButton>
      </div>
      <div className={styles.quizWrapper}>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>

        <div className={styles.question}>
          <div className={styles.navigation}>
            {questions?.map((item, index) => (
              <NavigationEl
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                id={index}
                key={index}
              />
            ))}
          </div>

          <div>
            <QuizItem
              setDisabledButton={setDisabledButton}
              objNumber={objNumber}
              handleSetAnswer={handleSetAnswer}
              data={questions[questionNumber]}
              questionNumber={questionNumber}
            />
          </div>
          <div className={styles.buttons}>
            {questions.length - 1 > questionNumber ? (
              <div onClick={changeQuestion}>
                <MenuButton
                  classNameForBtn={styles.btnWrapper}
                  disabled={disabledButton}
                  title="Следующий вопрос"
                  className={styles.btn}
                />
              </div>
            ) : (
              <div onClick={navigateToGratitude}>
                <MenuButton
                  classNameForBtn={styles.btnWrapper}
                  disabled={disabledButton}
                  title="Закончить опрос"
                  className={styles.btn}
                />
              </div>
            )}
            {questionNumber > 0 && (
              <div onClick={prevQuestion}>
                <MenuButton
                  classNameForBtn={styles.btnWrapper}
                  title="Предыдущий вопрос"
                  className={styles.btn}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
