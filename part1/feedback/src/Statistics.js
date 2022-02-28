import React from "react";
import "./styles.css";

const Statistics = (props) => {
  return (
    <div className="container">
      <h2>Statistics</h2>
      <div>
        {props.total > 0 ? (
          <table>
            <tr>
              <td>Good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{props.average.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{props.positive.toFixed(2) + "%"}</td>
            </tr>
          </table>
        ) : (
          "No feedback has been given yet"
        )}
      </div>
    </div>
  );
};

export default Statistics;
