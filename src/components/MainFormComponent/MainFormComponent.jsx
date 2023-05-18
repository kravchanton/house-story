import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMainForm } from "../../bll/reducers/mainFormReducer";

import styles from "./MainFormComponent.module.scss";

import { Basic } from "../Form";

export const MainFormComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainForm());
  }, []);
  let data = useSelector((state) => state.mainForm.mainForm);
  const [isActiveRight, setIsActiveRight] = useState(false);
  const [isActiveLeft, setIsActiveLeft] = useState(true);

  const handleActiveRight = () => {
    setIsActiveRight(true);
    setIsActiveLeft(false);
  };

  const handleActiveLeft = () => {
    setIsActiveLeft(true);
    setIsActiveRight(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button
          onClick={handleActiveLeft}
          className={isActiveLeft ? styles.btnActive : styles.buttonLeft}
        >
          Записаться на встречу
        </button>
        <button
          onClick={handleActiveRight}
          className={isActiveRight ? styles.btnActive : styles.buttonRight}
        >
          Написать в мессенджер
        </button>
      </div>
      <div className={styles.form}>
        <h4 className={styles.titleForm}>Хотите записаться на консультацию?</h4>
        <div className={styles.subTitleForm}>
          Оставьте заявку и получите расчёт стоимости и помощь в подборе
          материалов напрямую от производителя в ПОДАРОК{" "}
          <span> ( экономия до 30%)</span>
        </div>
        {isActiveLeft ? (
          <Basic
            select={true}
            classNameForm={styles.contactsForm}
            classNameInput={styles.contactsFormInput}
            classNameSelect={styles.contactsFormSelect}
            classNameForBtn={styles.contactsFormBtn}
            btnText="Отправить"
            lockText={true}
          />
        ) : (
          <div className={styles.socialsWrapper}>
            {data?.attributes?.socialForm?.socialLinks.map((item) => (
              <a
                className={styles.socialLink}
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${item?.icon?.data?.attributes?.url}`}
                  alt=""
                />
                <p>{item.title}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
