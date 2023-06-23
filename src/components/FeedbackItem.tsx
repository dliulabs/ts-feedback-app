import React from "react";
import Card from "./shared/Card";
// import { useState } from "react";

export interface FeedbackItemType {
  id: number;
  rating: number;
  text: string;
}

export interface FeedbackItemProps {
  item: FeedbackItemType;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
  // const [rating, setRating] = useState<number>(item.rating);
  // const [text, setText] = useState<string>(item.text);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setRating((prev) => prev + 1); // event.target.value;
  // };

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
