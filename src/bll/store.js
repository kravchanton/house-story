import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";
import answersSlice from "./AnswerReducer";
import meetingReducer from "./meetingReducer";
import photoReducer from "./photoReducer";
import catalogReducer from "./catalogReducer";
import catalogPageReducer from "./catalogPageReducer";
import topObjectReducer from "./topObjectReducer";
import mainFormReducer from "./mainFormReducer";
import blogReducer from "./blogReducer";
import contactsReducer from "./contactsReducer";
import aboutReducer from "./aboutReducer";
import blockArticleReducer from "./blockAtricleReducer";
import blockVideoReducer from "./blockVideoReducer";
import layoutReducer from "./layoutReducer";
import mainFormVariantReducer from "./mainFormVariantReducer";
import ourProjectReducer from "./ourProjectReducer";
import landingPageReducer from "./landingPageReducer";
import gratitudeFormReducer from "./gratitudeFormReducer";

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
