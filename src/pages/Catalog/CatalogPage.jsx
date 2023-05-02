import React, {useEffect} from "react";

import styles from "./CatalogPage.module.scss";
import {CatalogContainer, Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {CatalogQuiz} from "../../components/Catalog/CatalogQuiz";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalogPage} from "./../../bll/catalogPageReducer";
import {TopObject} from "../../components/TopObject/TopObject";
import {BLockArticle} from "../../components/BlockArticle/BlockArticle";
import {BlockVideo} from "../../components/BlockVideo/BlockVideo";

export const CatalogPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCatalogPage());
    }, []);
    let data = useSelector((state) => state.catalogPage.catalogPage);
    console.log(data)
    return (
        <main className={styles.main}>
            {data && <Container>
                <NavigationHeader/>
                <MainForm/>
                <CatalogContainer/>
                <CatalogQuiz numberQuiz={2}/>
                <TopObject/>

                <Garanties title={true}/>
                <BlockVideo />
                <BLockArticle/>
                <Excursion cloudImg={true} houseImg={true}/>
            </Container>}
        </main>
    );
};
