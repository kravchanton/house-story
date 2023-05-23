import React, { useCallback, useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchLayoutData } from "../../bll/reducers/layoutReducer";

import styles from "./Layout.module.scss";

import { Popup, Sprite } from "../../components";
import { Footer, Header } from "../../containers";

export const Layout = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.layoutData?.layoutData?.attributes);

  useEffect(() => {
    dispatch(fetchLayoutData());
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  });

  const handleLeave = (e) => {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave, { once: true });
  }, []);
  return (
    <>
      <ScrollRestoration />
      {data && (
        <div className={styles.wrapper}>
          {isOpen && <Popup setIsOpen={setIsOpen} handleClose={handleClose} />}
          <Sprite />
          <Header
            mainPhone={data.header.mainPhone}
            mainContact={data.header.mainContact}
            buttonText={data.header.buttonText}
            buttonLink={data.header.buttonLink}
            socialLinks={data.header.socialLinks}
            contactItems={data.header.contactItems}
          />
          <Outlet />
          <Footer
            reviews={data.footer.videoReview}
            socialLinks={data.footer.socialLinks}
          />
        </div>
      )}
    </>
  );
};
