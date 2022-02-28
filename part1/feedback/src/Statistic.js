import React from "react";

const Statistic = (props) => {
  return (
    <div>
      {props.stat + ": " + props.number.toFixed(props.decimals)}
      {props.children}
    </div>
  );
};

export default Statistic;
