import React, { useEffect } from "react";

import styles from "./Contacts.module.scss";
import {
  Container,
  Excursion,
  MainFormComponent,
  ContactsGallery,
} from "../../components";
import classNames from "classnames";
import { BlockWrapper } from "../../containers";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsData } from "../../bll/contactsReducer";

export const Contacts = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.contactsData.contactsData.attributes
  );

  useEffect(() => {
    dispatch(fetchContactsData());
  }, []);

  console.log(data);
  return (
    <section className={styles.contactsSection}>
      <Container>
        <div className={styles.contacts}>
          <h3 className={classNames("titleBlock", styles.title)}>Контакты</h3>
          <div className={styles.info}>
            <div className={styles.names}>
              {data?.contactInfo?.map((item) => {
                return (
                  <div key={item.id} className={styles.item}>
                    <p className={styles.department}>{item.fieldName}</p>
                    <div className={styles.personWrapper}>
                      <p className={styles.person}>{item.fieldDescription}</p>
                      {item.phoneNumber && (
                        <h4 className={styles.phone}>{item.phoneNumber}</h4>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <MainFormComponent />
          </div>
          <div className={styles.photo}>
            <h3 className={classNames("titleBlock", styles.title)}>
              Фото офиса
            </h3>
            <ContactsGallery />
          </div>
          <BlockWrapper
            top={true}
            title="Топ выполненных объектов"
            subtitle="Топ выполненных объектов"
          />
          <Excursion houseImg={true} cloudImg={true} />
        </div>
      </Container>
    </section>
  );
};
