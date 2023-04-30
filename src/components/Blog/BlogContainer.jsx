import React, {useEffect, useState} from "react";
import styles from "./GalleryContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";
import {PhotoList} from "./PhotoList";
import {MenuPhoto} from "./MenuPhoto";
import {fetchBlog} from "../../bll/blogReducer";

export const BlogContainer = () => {
    const [folder, setFolder] = useState(0);
    const [search, setSearch] = useState('')

    let id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlog());
        setFolder(id.idPage - 1)
    }, []);
    let Arr = []
    let data = useSelector((state) => state.blog.blog);
    console.log(data)
    data?.map(t => (t.attributes.item.filter(item => item.title?.toLowerCase().includes(search.toLowerCase()) ? Arr.push(item) : '')))
    let dataTransfer
    if (search.length > 1) {
        dataTransfer = Arr
    } else if (data) {
        dataTransfer = data[folder]?.attributes?.item
    }


    return (
        <div className={styles.catalog}>
            <h2>
                фотогалерея
            </h2>
            <div className={styles.wrapper}>
                <MenuPhoto search={search} setSearch={setSearch} data={data} folder={folder} setFolder={setFolder}/>
                {data && <PhotoList key={folder} data={dataTransfer}/>}
            </div>
        </div>
    );
};