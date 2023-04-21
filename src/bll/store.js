import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";
import answersSlice from "./AnswerReducer";
import meetingReducer from "./meetingReducer";
import photoReducer from "./photoReducer";
import catalogReducer from "./catalogReducer";
import catalogPageReducer from "./catalogPageReducer";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersSlice,
    meetingData: meetingReducer,
    photo: photoReducer,
    catalog: catalogReducer,
    catalogPage: catalogPageReducer
  },
});

//
window.store = store; // for dev
