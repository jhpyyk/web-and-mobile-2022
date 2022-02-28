import React from "react";
import "./styles.css";

const FeedbackButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="FeedbackButton"
      style={{ color: props.color }}
    >
      {props.text}
    </button>
  );
};

export default FeedbackButton;
