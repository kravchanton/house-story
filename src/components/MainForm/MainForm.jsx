import React, { useEffect } from "react";
import styles from "./MainForm.module.scss";
import tree from "./../../assets/tree.png";
import cloud from "./../../assets/cloud.png";
import backgroundHouse from "./../../assets/backgroudHouse.png";
import rCloud from "./../../assets/rCloud.png";
import tCloud from "./../../assets/tCloud.png";
import { MainFormComponent } from "../MainFormComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainForm } from "../../bll/mainFormReducer";
import { VideoLink } from "../VideoLink";

export const MainForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainForm());
  }, []);
  let data = useSelector((state) => state.mainForm.mainForm);
  return (
    <div className={styles.mainWrapper}>
      {data && (
        <>
          <img className={styles.treeLeft} src={tree} alt="tree" />
          <img className={styles.cloud} src={cloud} alt="cloud" />
          <img
            className={styles.backgroundHouse}
            src={backgroundHouse}
            alt="backgroundHouse"
          />
          <img className={styles.rCloud} src={rCloud} alt="rCloud" />
          <img className={styles.tCloud} src={tCloud} alt="tCloud" />
          <div className={styles.formWrapper}>
            <h2>{data.attributes.title}</h2>
            <h3>{data.attributes.subtitle}</h3>

            <MainFormComponent links={data?.attributes?.socialForm?.socialLinks} />
          </div>
          <div className={styles.videoWrapper}>
            <VideoLink
              blurPoster={true}
              title={data.attributes.videoTitle}
              author={data.attributes.author}
              descr={data.attributes.descr}
              poster={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.poster?.data?.attributes?.url}`}
              youtubeLink={data?.attributes?.youtubeLink}
            />
          </div>
        </>
      )}
    </div>
  );
};
