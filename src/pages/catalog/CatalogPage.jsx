import React from "react";

import styles from "./Catalog.module.scss";
import {Container} from "../../components";
import {MainForm} from "../../components/MainForm/MainForm";
import {CatalogContainer} from "../../components/Catalog/CatalogContainer";
import {NavigationHeader} from "../../components/NavigationHeader/NavigationHeader";


export const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <Container>
                <NavigationHeader/>
                <MainForm/>
                <CatalogContainer/>
            </Container>
        </main>
    );
};
