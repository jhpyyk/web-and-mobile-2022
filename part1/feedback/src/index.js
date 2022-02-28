import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [goodAmount, setGoodAmount] = useState(0);
  const [neutralAmount, setNeutralAmount] = useState(0);
  const [badAmount, setBadAmount] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const calculateAverage = () => {
    let total = goodAmount + neutralAmount + badAmount;
    let weightedTotal = goodAmount - badAmount;

    if (total > 0) {
      return weightedTotal / total;
    }
    return 0;
  };

  const calculatePositivePercentage = () => {
    let total = goodAmount + neutralAmount + badAmount;
    if (total > 0) {
      return (100 * goodAmount) / total;
    }
    return 0;
  };

  useEffect(() => {
    setAverage(calculateAverage());
    setPositivePercentage(calculatePositivePercentage());
  }, [goodAmount, neutralAmount, badAmount]);

  return (
    <div className="container">
      <h1>Give us feedback</h1>
      <div>
        <button
          onClick={() => setGoodAmount(goodAmount + 1)}
          className="button"
          style={{ color: "green" }}
        >
          {"Good"}
        </button>
        <button
          onClick={() => setNeutralAmount(neutralAmount + 1)}
          className="button"
        >
          {"Neutral"}
        </button>
        <button
          onClick={() => setBadAmount(badAmount + 1)}
          className="button"
          style={{ color: "red" }}
        >
          {"Bad"}
        </button>
      </div>
      <h2>Stats</h2>
      <div>{"Good: " + goodAmount}</div>
      <div>{"Neutral: " + neutralAmount}</div>
      <div>{"Bad: " + badAmount}</div>
      <div>{"Average: " + average.toFixed(2)}</div>
      <div>{"Positive: " + positivePercentage.toFixed(2) + "%"}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
