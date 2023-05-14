import React, {useEffect} from "react";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import styles from "./MapPage.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../../bll/catalogReducer";
import {Excursion} from "../Excursion";
import {Container} from "../Container";
import {Card} from "./Card";
import {fetchPhotoGallery} from "../../bll/photoReducer";

export const MapPage = () => {
    let idCard = useParams();
    const dispatch = useDispatch();
    useEffect(() => {

        idCard.folder === 'catalog' && dispatch(fetchCatalog());
        idCard.folder === 'gallery' && dispatch(fetchPhotoGallery());
    }, []);


    let cardData
    let data
    if(idCard.folder === 'catalog' ) {
        data = useSelector((state) => state.catalog.catalog);
    }
    if(idCard.folder === 'gallery') {
      data = useSelector((state) => state.photo.photo);
    }


    idCard.folder === 'catalog' && data?.map(t => (t.attributes.item.filter(item => item.id == idCard.id ? cardData = item : '')))
    idCard.folder === 'gallery' && data?.map(t => (t.attributes.project.filter(item => item.id == idCard.id ? cardData = item : '')))
    console.log(cardData)

    const coordinate = cardData?.coordinates.split(',').map(t => Number(t))
    return <div className={styles.wrapper}>
        <Container>
            <section className={styles.mapWrap}><YMaps>
                {cardData && <Map
                    width="90vw"
                    height="70vh"
                    z-index={1}
                    defaultState={{
                        center: coordinate,
                        zoom: 8,
                    }}
                >
                    <Placemark geometry={coordinate}/>
                </Map>}
            </YMaps>
                {cardData && <div className={styles.position}><Card data={cardData}/></div>}

            </section>
            <Excursion cloudImg={true} houseImg={true}/>
        </Container>
    </div>
}