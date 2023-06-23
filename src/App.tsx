import React from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import { FeedbackItemType } from "./components/FeedbackItem";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { deleteFeedbackById } from "./features/feedback/FeedbackSlice";

const App: React.FC = () => {
  // const [feedback, setFeedback] = useState<FeedbackItemType[]>(FeedbackData);
  const feedback = useAppSelector((state) => state.feedback.feedback);
  const dispatch = useAppDispatch();

  const deleteFeedback = (id: number) => {
    if (window.confirm(`are you sure you want to delete feedback ${id}?`)) {
      // setFeedback(feedback.filter((item) => item.id !== id));
      dispatch(deleteFeedbackById(Number(id)));
    }
  };

  return (
    <>
      <Header text="Feedback UI Header" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
