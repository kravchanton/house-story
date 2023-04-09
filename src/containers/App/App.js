import React from "react";
import { Route, Routes } from "react-router-dom";

import { CatalogPage, Layout } from "../../pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};
