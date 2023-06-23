import React from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import { FeedbackItemType } from "./components/FeedbackItem";

const App: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackItemType[]>(FeedbackData);

  return (
    <>
      <Header text="Feedback UI Header" />
      <div className="container">
        <FeedbackList feedback={FeedbackData} />
      </div>
    </>
  );
};

export default App;
