import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Superadvanced web and mobile programming";
  const parts = {
    part1: "Basics of React",
    part2: "Using props",
    part3: "Component states",
  };
  const exercises = { exercise1: 8, exercise2: 10, exercise3: 12 };

  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Contents = (props) => {
  return (
    <div>
      <Part part={props.parts.part1} exercise={props.exercises.exercise1} />
      <Part part={props.parts.part2} exercise={props.exercises.exercise2} />
      <Part part={props.parts.part3} exercise={props.exercises.exercise3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Total{" "}
      {props.exercises.exercise1 +
        props.exercises.exercise2 +
        props.exercises.exercise3}{" "}
      exercises
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
