import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

import { Sprite } from "../../components";
import { Footer, Header } from "../../containers";

export const Layout = () => {
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
    <div className={styles.wrapper}>
      {/*{isOpen && <Popup setIsOpen={setIsOpen} handleClose={handleClose} />}*/}
      <Sprite />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
