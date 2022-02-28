import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
  return (
    <div className="container">
      <h2>Statistics</h2>
      <Statistic stat="Good" number={props.good} decimals={0} />
      <Statistic stat="Neutral" number={props.neutral} decimals={0} />
      <Statistic stat="Bad" number={props.bad} decimals={0} />
      <Statistic stat="Average" number={props.average} decimals={2} />
      <Statistic stat="Positive" number={props.positive} decimals={2}>
        {"%"}
      </Statistic>
    </div>
  );
};

export default Statistics;
