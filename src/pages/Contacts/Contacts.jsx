import React from "react";

import styles from "./Contacts.module.scss";
import {
  Container,
  Excursion,
  MainFormComponent,
  SimpleGallery,
} from "../../components";
import classNames from "classnames";
import { BlockWrapper } from "../../containers";

export const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <Container>
        <div className={styles.contacts}>
          <h3 className={classNames("titleBlock", styles.title)}>Контакты</h3>
          <div className={styles.info}>
            <div className={styles.names}>
              <div className={styles.item}>
                <p className={styles.department}>Отдел gроизводства</p>
                <div className={styles.personWrapper}>
                  <p className={styles.person}>Ксения Рыбакова</p>
                  <h4 className={styles.phone}>+375 25 542-04-19</h4>
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.department}>Отдел продаж</p>
                <div className={styles.personWrapper}>
                  <p className={styles.person}>
                    Ксения Рыбакова
                    <h4 className={styles.phone}>+375 25 542-04-19</h4>
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.department}>Отдел маркетинга</p>
                <div className={styles.personWrapper}>
                  <p className={styles.person}>Пожарицкий Роман Николаевич</p>
                  <h4 className={styles.phone}>+375 25 542-04-19</h4>
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.department}>Адрес офиса</p>
                <div className={styles.personWrapper}>
                  <p className={styles.person}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam earum fuga iste numquam perspiciatis qui!
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <p className={styles.department}>Юридический адрес</p>
                <div className={styles.personWrapper}>
                  <p className={styles.person}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam earum fuga iste numquam perspiciatis qui!
                  </p>
                </div>
              </div>
            </div>
            <MainFormComponent />
          </div>
          <div className={styles.photo}>
            <h3 className={classNames("titleBlock", styles.title)}>
              Фото офиса
            </h3>
            <SimpleGallery />
          </div>
          <BlockWrapper
            top={true}
            title="Топ выполненных объектов"
            subtitle="Топ выполненных объектов"
          />
          <Excursion />
        </div>
      </Container>
    </section>
  );
};
