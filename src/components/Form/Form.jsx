import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

import styles from "./Form.module.scss";
import { MenuButton } from "../MenuButton";
import { useSelector } from "react-redux";
import classNames from "classnames";

export const Basic = ({
  className,
  titleForm,
  classNameForm,
  classNameInput,
  classNameSelect,
  textarea,
  classNameForBtn,
  classNameForTextarea,
  btnText = "Оставить заявку",
  lockText,
  date,
  classNameForTitle,
  classNameForFile,
  file,
  select,
}) => {
  let answers = useSelector((state) => state.answers.answer);

  return (
    <div className={className}>
      {titleForm && (
        <p className={classNames(styles.titleForm, classNameForTitle)}>
          {titleForm}
        </p>
      )}
      <Formik
        initialValues={{
          name: "",
          phone: "",
          messenger: "",
        }}
        onSubmit={(value) => {
          let data = { ...value, answer: answers };

          axios.post(
            process.env.REACT_APP_API_URL + "/responses",
            {
              data,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }}
      >
        <Form className={classNames(styles.form, classNameForm)}>
          <Field
            className={classNames(styles.input, classNameInput)}
            id="name"
            name="name"
            placeholder="Ваше имя"
          />
          <Field
            className={classNames(styles.input, classNameInput)}
            id="phone"
            name="phone"
            placeholder="Номер телефона"
          />
          {select && (
            <Field
              className={classNames(styles.select, classNameSelect)}
              as="select"
              id="messenger"
              name="messenger"
              placeholder="Выберите мессенджер"
            >
              <option defaultValue="Выберите мессенджер">
                Выберите мессенджер
              </option>
              <option className={styles.option} value="viber">
                Viber
              </option>
              <option className={styles.option} value="whats-up">
                Whats-up
              </option>
              <option className={styles.option} value="telegram">
                Telegram
              </option>
            </Field>
          )}
          {file && (
            <Field
              className={classNames(styles.input, classNameForFile)}
              type="file"
              id="file"
              name="file"
              placeholder="Приккрепите свой проект"
            />
          )}

          {textarea && (
            <Field
              className={classNames(styles.input, classNameForTextarea)}
              as="textarea"
              id="question"
              name="question"
              placeholder="Ваш вопрос(необязательно)"
            />
          )}
          {date && (
            <Field
              className={classNames(styles.input, classNameForTextarea)}
              type="text"
              id="date"
              name="date"
              placeholder="Дата экскурсии"
            />
          )}

          <MenuButton
            className={styles.btn}
            classNameForBtn={classNameForBtn}
            title={btnText}
            lockText={lockText}
          />
        </Form>
      </Formik>
    </div>
  );
};
