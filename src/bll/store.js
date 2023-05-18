import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/quizReducer";
import answersSlice from "./reducers/AnswerReducer";
import meetingReducer from "./reducers/meetingReducer";
import photoReducer from "./reducers/photoReducer";
import catalogReducer from "./reducers/catalogReducer";
import catalogPageReducer from "./reducers/catalogPageReducer";
import topObjectReducer from "./reducers/topObjectReducer";
import mainFormReducer from "./reducers/mainFormReducer";
import blogReducer from "./reducers/blogReducer";
import contactsReducer from "./reducers/contactsReducer";
import aboutReducer from "./reducers/aboutReducer";
import blockArticleReducer from "./reducers/blockAtricleReducer";
import blockVideoReducer from "./reducers/blockVideoReducer";
import layoutReducer from "./reducers/layoutReducer";
import mainFormVariantReducer from "./reducers/mainFormVariantReducer";
import ourProjectReducer from "./reducers/ourProjectReducer";
import landingPageReducer from "./reducers/landingPageReducer";
import gratitudeFormReducer from "./reducers/gratitudeFormReducer";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersSlice,
    meetingData: meetingReducer,
    contactsData: contactsReducer,
    aboutData: aboutReducer,
    layoutData: layoutReducer,
    photo: photoReducer,
    catalog: catalogReducer,
    catalogPage: catalogPageReducer,
    mainForm: mainFormReducer,
    topObject: topObjectReducer,
    blog: blogReducer,
    blockArticle: blockArticleReducer,
    blockVideo: blockVideoReducer,
    mainFormVariant: mainFormVariantReducer,
    ourProject: ourProjectReducer,
    landingPage: landingPageReducer,
    gratitudeForm: gratitudeFormReducer,
  },
});

//
window.store = store; // for dev
