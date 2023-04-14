import React from "react";
import { Route, Routes } from "react-router-dom";

import { CatalogCard, CatalogPage, GalleryCard, Layout } from "../../pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog-card" element={<CatalogCard />} />
        <Route path="gallery-card" element={<GalleryCard />} />
      </Route>
    </Routes>
  );
};
