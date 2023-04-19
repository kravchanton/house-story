import React from "react";
import {Route, Routes} from "react-router-dom";

import {
  About,
  ArticlePage,
  CatalogCard,
  CatalogPage,
  Contacts,
  GalleryCard,
  Layout,
  Meeting,
} from "../../pages";
import {CatalogCard, CatalogPage, GalleryCard, Layout} from "../../pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<CatalogPage/>}/>
          <Route path="/catalog/:idPage" element={<CatalogPage/>}/>
          <Route path="/catalog/:idPage/:id" element={<CatalogCard/>} />
          <Route path="gallery-card" element={<GalleryCard />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="meeting" element={<Meeting />} />

      </Route>
    </Routes>
  );
};
