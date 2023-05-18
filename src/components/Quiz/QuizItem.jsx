import React from "react";
import { useDispatch } from "react-redux";
import { changeData } from "../../bll/reducers/quizReducer";

import styles from "./Quiz.module.scss";

import { RadioButton } from "../RadioButton";
import { Input } from "../Input";

export const QuizItem = ({
  data,
  questionNumber,
  handleSetAnswer,
  objNumber,
  setDisabledButton,
}) => {
  const dispatch = useDispatch();
  const setData = (answer, id) => {
    dispatch(changeData({ id, questionNumber, objNumber }));
    handleSetAnswer(answer);
  };
  return (
    <div>
      <p className={styles.title}>{data.title}</p>
      {data.input !== true ? (
        <div className={styles.rowImage}>
          {data.options.map((t, index) => {
            return (
              <div
                key={index}
                onClick={() => setData(t.answer, t.id)}
                className={styles.item}
              >
                {t.image.data !== null && (
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${t.image.data[0].attributes.url}`}
                    alt="image"
                  />
                )}
                <div className={styles.radioBtn}>
                  <RadioButton text={t.answer} checked={t.radioBTN} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.rowImage}>
          {data.options.map((t, index) => {
            return (
              <div key={index} className={styles.item}>
                <Input
                  key={questionNumber}
                  setDisabledButton={setDisabledButton}
                  data={t}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
