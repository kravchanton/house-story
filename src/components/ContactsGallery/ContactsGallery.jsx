import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ContactsGallery.scss";

import { fetchContactsData } from "../../bll/contactsReducer";
import { GalleryContactsComponent } from "../GalleryContactsComponent";

export const ContactsGallery = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.contactsData.contactsData.attributes
  );

  useEffect(() => {
    dispatch(fetchContactsData());
  }, []);

  return (
    <div>
      <GalleryContactsComponent
        galleryID="my-test-gallery"
        images={[
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[0]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[0]?.attributes?.url}`,
            width: data?.photos?.data[0]?.attributes?.width,
            height: data?.photos?.data[0]?.attributes?.height,
          },
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[1]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[1]?.attributes?.url}`,
            width: `${data?.photos?.data[1]?.attributes?.width}`,
            height: `${data?.photos?.data[1]?.attributes?.height}`,
          },
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[2]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[2]?.attributes?.url}`,
            width: `${data?.photos?.data[2]?.attributes?.width}`,
            height: `${data?.photos?.data[2]?.attributes?.height}`,
          },
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[3]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[3]?.attributes?.url}`,
            width: `${data?.photos?.data[3]?.attributes?.width}`,
            height: `${data?.photos?.data[3]?.attributes?.height}`,
          },
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[4]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[4]?.attributes?.url}`,
            width: `${data?.photos?.data[4]?.attributes?.width}`,
            height: `${data?.photos?.data[4]?.attributes?.height}`,
          },
          {
            largeURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[5]?.attributes?.url}`,
            thumbnailURL: `${process.env.REACT_APP_UPLOAD_URL}${data?.photos?.data[5]?.attributes?.url}`,
            width: `${data?.photos?.data[5]?.attributes?.width}`,
            height: `${data?.photos?.data[5]?.attributes?.height}`,
          },
        ]}
      />
    </div>
  );
};
