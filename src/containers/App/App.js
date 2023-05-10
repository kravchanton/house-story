import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  About,
  ArticlePage,
  CatalogCard,
  CatalogPage,
  Contacts,
  GalleryCard,
  GratitudeForm,
  Layout,
  Meeting,
  Gratitude,
  BlogPage,
  LandingPage,
  GalleryPage,
  Appointment,
} from "../../pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="/catalog/:idPage" element={<CatalogPage />} />
        <Route path="/catalog/:idPage/gratitude" element={<Gratitude />} />
        <Route path="/catalog/:idPage/:id" element={<CatalogCard />} />
        <Route path="/gallery-card/:idPage" element={<GalleryPage />} />
        <Route path="/gallery-card/:idPage/:id" element={<GalleryCard />} />
        <Route path="/blog/:idPage" element={<BlogPage />} />
        <Route path="/blog/:idPage/:id" element={<ArticlePage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="gratitude" element={<Gratitude />} />
        <Route path="gratitude-success" element={<GratitudeForm />} />
        <Route path="appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
};
