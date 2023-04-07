import React from "react";

import styles from "./Catalog.module.scss";
import {Container} from "../../components";
import {MainForm} from "../../components/MainForm/MainForm";
import {NavigationCatalog} from "../../components/NavigationCatalog/NavigationCatalog";
import {CatalogContainer} from "../../components/Catalog/CatalogContainer";


export const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <Container>
                <NavigationCatalog/>
                <MainForm/>
                <CatalogContainer/>
            </Container>
        </main>
    );
};
