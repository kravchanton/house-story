import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMainFormVariant } from "../../bll/reducers/mainFormVariantReducer";

import styles from "./MainFormVariant.module.scss";

import tree from "../../assets/tree.png";
import cloud from "../../assets/cloud.png";
import rCloud from "../../assets/rcloud.png";
import tCloud from "../../assets/tcloud.png";
import fire from "../../assets/tild3363-6466-4832-b764-323531366564__fire-joypixels_1 1 (1).png";

import { CheckVariant } from "../../icons";
import {
  VideoLink,
  MenuButton,
  MainFormComponent,
  MainForm,
} from "../../components";

export const MainFormVariant = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainFormVariant());
  }, []);
  let data = useSelector((state) => state.mainFormVariant.mainFormVariant);

  return (
    <>
      {data && (
        <>
          {data.attributes.mainForm ? (
            <MainForm />
          ) : (
            <div className={styles.mainWrapper}>
              {data && (
                <>
                  <img className={styles.treeLeft} src={tree} alt="tree" />
                  <img className={styles.cloud} src={cloud} alt="cloud" />
                  <img className={styles.rCloud} src={rCloud} alt="rCloud" />
                  <img className={styles.tCloud} src={tCloud} alt="tCloud" />
                  <div className={styles.info}>
                    <h3>Поможем выйти на стабильный высокий доход</h3>
                  </div>
                  <div className={styles.formWrapper}>
                    <div className={styles.info1}>
                      <p>Уже в течении 2-ух дней</p>
                    </div>
                    <h2>{data.attributes.title}</h2>
                    <h3>Что входит в наши услуги: </h3>
                    <div className={styles.items}>
                      {data.attributes.services.map((item) => (
                        <div key={item.id} className={styles.itemWrapper}>
                          <CheckVariant />
                          <p className={styles.itemText}>{item.description}</p>
                        </div>
                      ))}
                    </div>

                    {data.attributes.buttonVariant && (
                      <div className={styles.buttonVariant}>
                        <div className={styles.textWrapper}>
                          <p>Оставьте заявку</p>
                          <img src={fire} alt="" />
                        </div>
                        <a href={data.attributes.buttonLink}>
                          <MenuButton
                            className={styles.btn}
                            title={data.attributes.buttonText}
                          />
                        </a>
                      </div>
                    )}
                    {data.attributes.formVariant && <MainFormComponent />}

                    {/*<div className={styles.videoWrapper}>*/}
                    {/*  <VideoLink*/}
                    {/*    blurPoster={true}*/}
                    {/*    title={data.attributes.videoTitle}*/}
                    {/*    author={data.attributes.author}*/}
                    {/*    descr={data.attributes.descr}*/}
                    {/*    poster={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.poster?.data?.attributes?.url}`}*/}
                    {/*    youtubeLink={data?.attributes?.youtubeLink}*/}
                    {/*  />*/}
                  </div>
                  {data.attributes.image.data && (
                    <div className={styles.imageWrapper}>
                      <img
                        src={`${process.env.REACT_APP_UPLOAD_URL}${data.attributes.image.data.attributes.url}`}
                        alt=""
                      />
                    </div>
                  )}
                  {data.attributes.video.data && (
                    <div className={styles.videoWrapper}>
                      <VideoLink
                        poster={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.poster?.data?.attributes?.url}`}
                        src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.video?.data?.attributes?.url}`}
                      />
                    </div>
                  )}
                  {data.attributes.youtubeLink && (
                    <div className={styles.videoWrapper}>
                      <VideoLink
                        poster={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.poster?.data?.attributes?.url}`}
                        youtubeLink={data.attributes.youtubeLink}
                      />
                    </div>
                  )}
                  {data.attributes.externalLink && (
                    <div className={styles.videoWrapper}>
                      <VideoLink
                        poster={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.poster?.data?.attributes?.url}`}
                        src={data.attributes.externalLink}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
