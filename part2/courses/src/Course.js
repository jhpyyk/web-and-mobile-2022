const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Contents course={props.course} />
      <Total course={props.course} />
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
  props.course.parts.forEach((part) => (total += part.exercises));
  return <p>Total: {total}</p>;
};

export default Course;
