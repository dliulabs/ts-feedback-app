import { configureStore } from "@reduxjs/toolkit";
import FeedbackReducer from "../features/feedback/FeedbackSlice";

export const store = configureStore({
  reducer: {
    feedback: FeedbackReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
