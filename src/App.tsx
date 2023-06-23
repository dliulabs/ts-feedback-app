import React from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import { FeedbackItemType } from "./components/FeedbackItem";

const App: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackItemType[]>(FeedbackData);

  const deleteFeedback = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <Header text="Feedback UI Header" />
      <div className="container">
        <FeedbackList
          feedback={FeedbackData}
          handleDelete={(id: number) => deleteFeedback(id)}
        />
      </div>
    </>
  );
};

export default App;
