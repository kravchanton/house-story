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

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersSlice,
    meetingData: meetingReducer,
    photo: photoReducer,
    catalog: catalogReducer,
    catalogPage: catalogPageReducer,
    mainForm: mainFormReducer,
    topObject: topObjectReducer,
    blog: blogReducer,
  },
});

//
window.store = store; // for dev
