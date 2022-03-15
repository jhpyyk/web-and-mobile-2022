import React from "react";
import Person from "./Person";

const NumberTable = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {props.persons.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;
