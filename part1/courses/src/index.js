import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Superadvanced web and mobile programming";
  const parts = [
    {
      name: "Basics of React",
      exercises: 8,
    },
    {
      name: "Using props",
      exercises: 10,
    },
    {
      name: "Component states",
      exercises: 12,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Contents = (props) => {
  const partComponents = props.parts.map((part, index) => (
    <Part part={part} key={index} />
  ));
  return partComponents;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  let total = 0;
  props.parts.forEach((part) => (total += part.exercises));
  return <p>Total {total} exercises</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));
