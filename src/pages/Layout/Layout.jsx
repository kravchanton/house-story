import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Layout.module.scss";

import { Sprite } from "../../components";
import { Footer, Header } from "../../containers";

import { fetchLayoutData } from "../../bll/layoutReducer";

export const Layout = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.layoutData.layoutData.attributes);
  // console.log(data);
  const data = useSelector((state) => state.layoutData.layoutData.attributes);

  useEffect(() => {
    dispatch(fetchLayoutData());
  }, []);
  // const [isOpen, setIsOpen] = useState(false);
  //
  // const handleClose = useCallback(() => {
  //   setIsOpen(false);
  // });
  //
  // const handleLeave = (e) => {
  //   if (
  //     e.clientY <= 0 ||
  //     e.clientX <= 0 ||
  //     e.clientX >= window.innerWidth ||
  //     e.clientY >= window.innerHeight
  //   ) {
  //     setIsOpen(true);
  //   }
  // };
  //
  // useEffect(() => {
  //   document.addEventListener("mouseleave", handleLeave);
  // }, []);
  return (
    <>
      {data && (
        <div className={styles.wrapper}>
          {/*{isOpen && <Popup setIsOpen={setIsOpen} handleClose={handleClose} />}*/}
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
