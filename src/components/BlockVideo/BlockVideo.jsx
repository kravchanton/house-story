import React, { useEffect } from "react";
import classNames from "classnames";
import "swiper/css";

import styles from "./BlockWrapper.module.scss";
import { MenuButton } from "../MenuButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockVideo } from "../../bll/blockVideoReducer";
import { NavLink } from "react-router-dom";
import { VideoLink } from "../VideoLink";

export const BlockVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlockVideo());
  }, []);
  let data = useSelector((state) => state?.blockVideo?.blockVideo?.attributes);
  console.log(data);

  return (
    <section className={classNames(styles.section)}>
      {data && (
        <>
          <div>
            <h3 className={classNames("titleBlock", styles.title)}>
              {data.title}
            </h3>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>

                <div className={styles.content}>

                    {data.video.slice(0, 3).map((t, index) => <VideoLink
                            key={index}
                            link={true}
                            id={t.id}
                            title={t.title}
                            author={t.author}
                            position={t.position}
                            classNameWrapper={styles.wrapper}
                            youtubeLink={t.youtubeLink}
                            src={t?.video?.data?.attributes?.name && `${process.env.REACT_APP_UPLOAD_URL}${t?.video?.data?.attributes?.url}`}
                            poster={`${process.env.REACT_APP_UPLOAD_URL}${t?.image?.data?.attributes?.url}`}
                        />
                    )}

                </div>

          <NavLink to={data.buttonLink}>
            {" "}
            <MenuButton className={styles.btnFloor} title={data.buttonText} />
          </NavLink>
        </>
      )}
    </section>
  );
};
