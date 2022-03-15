import React, { useState } from "react";
import Person from "./Person";
import PersonForm from "./PersonForm";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const submitPerson = (nameInput) => {
    if (persons.findIndex((person) => person.name === nameInput) === -1) {
      setPersons(persons.concat({ name: nameInput }));
    } else {
      alert("Name is already on the list");
    }
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <PersonForm submitPerson={submitPerson} />
      <h2>Numerot</h2>
      {persons.map((person) => (
        <Person person={person} key={person.name} />
      ))}
    </div>
  );
};

export default App;
