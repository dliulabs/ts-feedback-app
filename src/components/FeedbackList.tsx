import React from "react";
import FeedbackItem, { FeedbackItemType } from "./FeedbackItem";

interface FeedbackListType {
  feedback: FeedbackItemType[];
  handleDelete: (id: number) => void;
}

const FeedbackList: React.FC<FeedbackListType> = ({
  feedback,
  handleDelete,
}) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
