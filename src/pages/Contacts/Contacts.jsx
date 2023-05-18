import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { fetchContactsData } from "../../bll/reducers/contactsReducer";

import styles from "./Contacts.module.scss";

import {
  Container,
  Excursion,
  MainFormComponent,
  ContactsGallery,
  TopObject,
} from "../../components";
import { fetchMainForm } from "../../bll/reducers/mainFormReducer";

export const Contacts = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.contactsData.contactsData.attributes
  );

  const mainFormData = useSelector((state) => state.mainForm.mainForm);

  useEffect(() => {
    dispatch(fetchContactsData());
  }, []);

  useEffect(() => {
    dispatch(fetchMainForm());
  }, []);

  return (
    <section className={styles.contactsSection}>
      {data && (
        <Container>
          <div className={styles.contacts}>
            <h3 className={classNames("titleBlock", styles.title)}>Контакты</h3>
            <div className={styles.info}>
              <div className={styles.names}>
                {data.contactInfo.map((item) => {
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
              <MainFormComponent
                links={mainFormData?.attributes?.socialForm?.socialLinks}
              />
            </div>
            <div className={styles.photo}>
              <h3 className={classNames("titleBlock", styles.title)}>
                Фото офиса
              </h3>
              <ContactsGallery />
            </div>
            <TopObject />
            <Excursion houseImg={true} cloudImg={true} />
          </div>
        </Container>
      )}
    </section>
  );
};
