import axios from "axios";

const settings = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  ...settings,
});

export const quizApi = {
  getQuizeQuestions() {
    return apiInstance.get(`quizzes?populate=deep`);
  },
};

export const meetingApi = {
  getMeetingData() {
    return apiInstance.get("meeting?populate=deep");
  },
};

export const layoutApi = {
  getLayoutData() {
    return apiInstance.get("layout?populate=deep");
  },
};

export const contactsApi = {
  getContactsData() {
    return apiInstance.get("contact?populate=deep");
  },
};
export const aboutApi = {
  getAboutData() {
    return apiInstance.get("about?populate=deep");
  },
};
export const photoApi = {
  getPhotoData() {
    return apiInstance.get("photo-galleries?populate=deep");
  },
};
export const catalogApi = {
  getCatalogData() {
    return apiInstance.get("catalogs?populate=deep");
  },
  getCatalogPageData() {
    return apiInstance.get("gallery-pages?populate=deep");
  },
};

export const api = {
    getMainFormData() {
        return apiInstance.get("main-form?populate=deep")
    },
    getTopObject() {
        return apiInstance.get("top-objects?populate=deep")
    },
    getBlogData() {
        return apiInstance.get("blogs?populate=deep")
    } ,
    getBlockArticleData() {
        return apiInstance.get("block-atricle?populate=deep")
    },
    getBlockVideoData() {
        return apiInstance.get("block-video?populate=deep")
    }
}

