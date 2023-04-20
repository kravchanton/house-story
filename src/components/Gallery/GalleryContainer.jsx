import React, {useEffect, useState} from "react";
import styles from "./GalleryContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";
import {MenuCatalog} from "../Catalog";
import {PhotoList} from "./PhotoList";
import {fetchPhotoGallery} from "../../bll/photoReducer";

export const GalleryContainer = () => {
    const [folder, setFolder] = useState(0);
    const [search, setSearch] = useState('')

    let id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhotoGallery());
        setFolder(id.idPage - 1)
    }, []);
    let Arr = []
    let data = useSelector((state) => state.photo.photo);
    console.log(data)
    data?.map(t => (t.attributes.project.filter(item => item.title?.toLowerCase().includes(search.toLowerCase()) ? Arr.push(item) : '')))
    let dataTransfer
    if (search.length > 1) {
        dataTransfer = Arr
    } else if (data) {
        dataTransfer = data[folder]?.attributes?.project
    }


    return (
        <div className={styles.catalog}>
            <h2>
                Каталог более чем 70 готовых проектов из любых материалов <br/>{" "}
                <span>напрямую от производителя и с гарантией до 50 лет</span>
            </h2>
            <div className={styles.wrapper}>
                <MenuCatalog search={search} setSearch={setSearch} data={data} folder={folder} setFolder={setFolder}/>
                {data && <PhotoList key={folder} data={dataTransfer}/>}
            </div>
        </div>
    );
};
