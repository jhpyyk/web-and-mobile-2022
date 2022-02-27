import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Superadvanced web and mobile programming";
  const part1 = {
    name: "Basics of React",
    exercises: 8,
  };
  const part2 = {
    name: "Using props",
    exercises: 10,
  };
  const part3 = {
    name: "Component states",
    exercises: 12,
  };
  return (
    <div>
      <Header course={course} />
      <Contents part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Contents = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Total{" "}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}{" "}
      exercises
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
