import { Action, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { FeedbackItemType } from "../../components/FeedbackItem";
import FeedbackData from "../../data/FeedbackData";
import { stat } from "fs";

interface FeedbackState {
  feedback: FeedbackItemType[];
}

const initialState: FeedbackState = {
  feedback: FeedbackData,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedback: FeedbackData,
  },
  reducers: {
    deleteFeedbackById: (state, action: PayloadAction<number>): void => {
      state.feedback = state.feedback.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { deleteFeedbackById } = feedbackSlice.actions;

export const deleteFeedbackAsync = (id: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(deleteFeedbackById(id));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: FeedbackState) => state.feedback;

export default feedbackSlice.reducer;
