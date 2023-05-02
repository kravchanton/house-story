import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { MenuButton } from "../MenuButton";

import styles from "./AboutContentBlock.module.scss";

export const AboutContentBlock = ({ title, reverseContent, src, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return document.documentElement.clientWidth > 768
      ? setIsOpen(true)
      : setIsOpen(false);
  }, []);

  console.log(isOpen);

  return (
    <>
      {reverseContent ? (
        <>
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            <MenuButton
              className={styles.btnContentInner}
              classNameForBtn={styles.btnContent}
              title={title}
            />
          </button>
          {isOpen && (
            <div className={styles.content}>
              <img
                className={styles.img}
                src={`${process.env.REACT_APP_UPLOAD_URL}${src}`}
                alt=""
              />
              <div className={styles.textWrapper}>
                <h4 className={styles.titleContent}>{title}</h4>
                <p className={styles.text}>
                  <ReactMarkdown>{text}</ReactMarkdown>
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <button onClick={() => setIsOpen((prevState) => !prevState)}>
            <MenuButton
              className={styles.btnContentInner}
              classNameForBtn={styles.btnContent}
              title={title}
            />
          </button>
          {isOpen && (
            <div className={styles.content}>
              <div className={styles.text}>
                <h4 className={styles.titleContent}>{title}</h4>
                <p className={styles.text}>
                  <ReactMarkdown>{text}</ReactMarkdown>
                </p>
              </div>
              <img
                className={styles.img}
                src={`${process.env.REACT_APP_UPLOAD_URL}${src}`}
                alt=""
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
