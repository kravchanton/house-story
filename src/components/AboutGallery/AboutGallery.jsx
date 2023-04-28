import React from "react";

import { Gallery } from "../Gallery";

import "./AboutGallery.scss";

export const AboutGallery = ({
  isActiveOffice,
  isActiveProduction,
  isActiveStock,
}) => {
  return (
    <div>
      {isActiveOffice && (
        <Gallery isActiveOffice={isActiveOffice} galleryID="my-test-gallery" />
      )}
      {isActiveProduction && (
        <Gallery
          isActiveProduction={isActiveProduction}
          galleryID="my-test-gallery"
        />
      )}
      {isActiveStock && (
        <Gallery isActiveStock={isActiveStock} galleryID="my-test-gallery" />
      )}
    </div>
  );
};
