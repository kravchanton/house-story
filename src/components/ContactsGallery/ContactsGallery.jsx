import React from "react";

import "./ContactsGallery.scss";

import { GalleryContactsComponent } from "../GalleryContactsComponent";

export const ContactsGallery = () => {
  return (
    <div>
      <GalleryContactsComponent galleryID="my-test-gallery" />
    </div>
  );
};
