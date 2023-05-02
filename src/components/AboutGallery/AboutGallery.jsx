import React from "react";

import { GalleryAboutComponent } from "../GalleryAboutComponent";

import "./AboutGallery.scss";

export const AboutGallery = ({
  isActiveOffice,
  isActiveProduction,
  isActiveStock,
}) => {
  return (
    <div>
      {isActiveOffice && (
        <GalleryAboutComponent
          isActiveOffice={isActiveOffice}
          galleryID="my-test-gallery"
        />
      )}
      {isActiveProduction && (
        <GalleryAboutComponent
          isActiveProduction={isActiveProduction}
          galleryID="my-test-gallery"
        />
      )}
      {isActiveStock && (
        <GalleryAboutComponent
          isActiveStock={isActiveStock}
          galleryID="my-test-gallery"
        />
      )}
    </div>
  );
};
