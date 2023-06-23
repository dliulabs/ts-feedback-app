import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteFeedbackById } from "./FeedbackSlice";
import { AppDispatch, RootState } from "../../app/store";
import FeedbackList from "../../components/FeedbackList";

export function Feedback() {
  // const [incrementAmount, setIncrementAmount] = useState("2");
  const feedback = useAppSelector((state) => state.feedback.feedback);
  const dispatch = useAppDispatch();

  const deleteFeedback = (id: number) => {
    if (window.confirm(`are you sure you want to delete feedback ${id}?`)) {
      dispatch(deleteFeedbackById(id));
    }
  };

  return (
    <div className="container">
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}
