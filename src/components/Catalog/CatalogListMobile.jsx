import React from "react";
import styles from "./Catalog.module.scss";
import {CatalogItem} from "./CatalogItem";
import {usePagination, Pagination} from "pagination-react-js"
import './pagination.css'

export const CatalogListMobile = ({data, visible, map}) => {
    const {currentPage, entriesPerPage, entries} = usePagination(1, 1);

    return (
        <div className={visible ? styles.catalogListWrapperMobile : styles.hidden}>
            <div
                className={styles.catalogList}>{data.slice(entries.indexOfFirst, entries.indexOfLast).map((t, index) => (
                <CatalogItem key={index} map={map} data={t}/>
            ))}
                <Pagination
                    entriesPerPage={entriesPerPage.get}
                    totalEntries={data.length}
                    currentPage={{get: currentPage.get, set: currentPage.set}}
                    offset={1}
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
                    showFirstNumberAlways={false}
                    showLastNumberAlways={false}

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

        </div>
    );
};
