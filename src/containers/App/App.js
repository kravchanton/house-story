import React from "react";
import {Route, Routes} from "react-router-dom";

import {CatalogCard, CatalogPage, Layout} from "../../pages";
import {GalleryCard} from "../../pages/GalleryCard";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<CatalogPage/>}/>
          <Route path="/catalog/:idPage" element={<CatalogPage/>}/>
          <Route path="/catalog/:idPage/:id" element={<CatalogCard/>} />
          <Route path="gallery-card" element={<GalleryCard />} />
      </Route>
    </Routes>
  );
};
