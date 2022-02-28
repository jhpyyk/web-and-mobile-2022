import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import FeedbackButton from "./FeedbackButton";
import Statistics from "./Statistics";

const App = () => {
  const [goodAmount, setGoodAmount] = useState(0);
  const [neutralAmount, setNeutralAmount] = useState(0);
  const [badAmount, setBadAmount] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const [feedbackTotal, setFeedbackTotal] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const calculateAverage = () => {
    let weightedTotal = goodAmount - badAmount;

    if (feedbackTotal > 0) {
      return weightedTotal / feedbackTotal;
    }
    return 0;
  };

  const calculatePositivePercentage = () => {
    if (feedbackTotal > 0) {
      return (100 * goodAmount) / feedbackTotal;
    }
    return 0;
  };

  useEffect(() => {
    setFeedbackTotal(goodAmount + neutralAmount + badAmount);
  }, [goodAmount, neutralAmount, badAmount]);

  useEffect(() => {
    setAverage(calculateAverage());
    setPositivePercentage(calculatePositivePercentage());
  }, [feedbackTotal]);

  return (
    <div className="container">
      <h1>Give us feedback</h1>
      <div>
        <FeedbackButton
          onClick={() => setGoodAmount(goodAmount + 1)}
          text={"Good"}
          color={"green"}
        />
        <FeedbackButton
          onClick={() => setNeutralAmount(neutralAmount + 1)}
          text={"Neutral"}
        />
        <FeedbackButton
          onClick={() => setBadAmount(badAmount + 1)}
          text={"Bad"}
          color={"red"}
        />
      </div>
      <div className="container">
        <button
          className="FeedbackButton"
          onClick={() => setIsStatsVisible(!isStatsVisible)}
        >
          {(isStatsVisible ? "Hide" : "Show") + " statistics"}
        </button>
        {isStatsVisible ? (
          <Statistics
            total={feedbackTotal}
            good={goodAmount}
            neutral={neutralAmount}
            bad={badAmount}
            average={average}
            positive={positivePercentage}
          />
        ) : null}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
