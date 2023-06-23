import { ChildProcess } from "child_process";
import React from "react";
// import PropTypes from "prop-types";

interface CardProps {
  reverse?: boolean;
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ reverse = true, children }) => {
  return (
    <div
      className={`card ${reverse && "reverse"}`}
      // style={{
      //   backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
      //   color: reverse ? "#fff" : "#000",
      // }}
    >
      {children}
    </div>
  );
};

// Card.defaultProps = {
//   reverse: true,
// };

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
//   reverse: bool,
// };

export default Card;
