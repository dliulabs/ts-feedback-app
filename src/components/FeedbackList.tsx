import React from "react";
import FeedbackItem, { FeedbackItemType } from "./FeedbackItem";

interface FeedbackListType {
  feedback: FeedbackItemType[];
}

const FeedbackList: React.FC<FeedbackListType> = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
