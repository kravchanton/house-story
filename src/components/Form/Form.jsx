import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./Form.module.scss";
import { MenuButton } from "../MenuButton";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validSchema = Yup.object().shape({
    name: Yup.string().required("Введите, пожалуйста, имя"),
    phone: Yup.string()
      .matches(phoneRegExp, "Неверный номер")
      .required("Введите, пожалуйста, номер телефона"),
  });

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
        validationSchema={validSchema}
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
          navigate("/gratitude-success");
        }}
      >
        {({ errors, touched }) => (
          <Form className={classNames(styles.form, classNameForm)}>
            <Field
              className={classNames(styles.input, classNameInput)}
              id="name"
              name="name"
              placeholder="Ваше имя"
            />
            {errors.name && touched.name ? (
              <p className={styles.errorField}>{errors.name}</p>
            ) : null}
            <Field
              className={classNames(styles.input, classNameInput)}
              id="phone"
              name="phone"
              placeholder="Номер телефона"
            />
            {errors.phone && touched.phone ? (
              <p className={styles.errorField}>{errors.phone}</p>
            ) : null}
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
        )}
      </Formik>
    </div>
  );
};
