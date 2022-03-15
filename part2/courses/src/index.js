import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Superadvanced web and mobile programming",
    parts: [
      {
        name: "Basics of React",
        exercises: 8,
        id: 1,
      },
      {
        name: "Using props",
        exercises: 10,
        id: 2,
      },
      {
        name: "Component states",
        exercises: 12,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Contents course={props.course} />
    </div>
  );
};
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Contents = (props) => {
  const partComponents = props.course.parts.map((part) => (
    <Part part={part} key={part.id} />
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
