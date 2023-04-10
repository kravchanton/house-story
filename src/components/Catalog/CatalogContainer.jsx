import React, {useEffect, useState} from "react";
import styles from "./Catalog.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../../bll/catalogReducer";
import {MenuCatalog} from "./MenuCatalog";
import {CatalogList} from "./CatalogList";

export const CatalogContainer = () => {
    const [folder, setFolder] = useState(0);
    const [search, setSearch] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);
    let Arr = []
    let data = useSelector((state) => state.catalog.catalog);
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
                Каталог более чем 70 готовых проектов из любых материалов <br/>{" "}
                <span>напрямую от производителя и с гарантией до 50 лет</span>
            </h2>
            <div className={styles.wrapper}>
                <MenuCatalog search={search} setSearch={setSearch} data={data} folder={folder} setFolder={setFolder}/>
                {data && <CatalogList data={dataTransfer}/>}
            </div>
        </div>
    );
};
