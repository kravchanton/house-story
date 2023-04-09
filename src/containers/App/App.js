import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../../pages";
import { CatalogPage } from "../../pages/Catalog/CatalogPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};
