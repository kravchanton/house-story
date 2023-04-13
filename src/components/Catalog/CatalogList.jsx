import React from "react";
import styles from "./Catalog.module.scss";
import {CatalogItem} from "./CatalogItem";
import {usePagination, Pagination} from "pagination-react-js"
import './pagination.css'

export const CatalogList = ({data}) => {
    const {currentPage, entriesPerPage, entries} = usePagination(1, 6);

    return (
        <div className={styles.catalogListWrapper}>
            <div
                className={styles.catalogList}>{data.slice(entries.indexOfFirst, entries.indexOfLast).map((t, index) => (
                <CatalogItem key={index} data={t}/>
            ))}
            </div>
            <Pagination
                entriesPerPage={entriesPerPage.get}
                totalEntries={data.length}
                currentPage={{get: currentPage.get, set: currentPage.set}}
                offset={3}
                classNames={{
                    wrapper: "pagination m-auto",
                    item: "pagination-item",
                    itemActive: "pagination-item-active",
                    navPrev: "pagination-item nav-item",
                    navNext: "pagination-item nav-item",
                    navStart: "pagination-item nav-item",
                    navEnd: "pagination-item nav-item",
                    navPrevCustom: "pagination-item",
                    navNextCustom: "pagination-item"
                }}
                showFirstNumberAlways={true}
                showLastNumberAlways={true}

                navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                navPrevCustom={{
                    steps: 6,
                    content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
                }}
                navNextCustom={{
                    steps: 6,
                    content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
                }}
            />
        </div>
    );
};
