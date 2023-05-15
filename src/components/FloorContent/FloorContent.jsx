import React from "react";

import styles from "./FloorContent.module.scss";
import rehypeRaw from 'https://esm.sh/rehype-raw@6'

import {MenuButton} from "../MenuButton";
import ReactMarkdown from "react-markdown";
import {NavLink} from "react-router-dom";

styles.imagesBlock = undefined;
export const FloorContent = ({data}) => {
    return (
        <div className={styles.section}>
            <img className={styles.floorImage}
                 src={`${process.env.REACT_APP_UPLOAD_URL}${data.mainPhoto.data?.attributes?.url}`} alt="firstFloor"/>
            <div className={styles.description}>
                <h4 className={styles.descTitle}>{data.title}</h4>
                {/* eslint-disable-next-line react/no-children-prop */}
                <p className={styles.text}><ReactMarkdown children={data.description} rehypePlugins={[rehypeRaw]}/></p>
            </div>
            <div className={styles.imagesBlock}>
                <div className={styles.imagesWrapper}>
                    <img className={styles.smallImage}
                         src={`${process.env.REACT_APP_UPLOAD_URL}${data?.media?.data[0]?.attributes?.url}`}
                         alt="firstimg"/>
                    <img className={styles.smallImage}
                         src={`${process.env.REACT_APP_UPLOAD_URL}${data?.media?.data[1]?.attributes?.url}`}
                         alt="secondimg"/>
                </div>
                <NavLink to={data.buttonLink}><MenuButton
                    title={data.buttonTitle}
                    className={styles.btnFloor}
                /></NavLink>
            </div>
        </div>
    );
};
