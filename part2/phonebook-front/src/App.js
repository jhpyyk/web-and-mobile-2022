import React, { useState } from "react";
import NumberTable from "./NumberTable";
import PersonForm from "./PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);

  const isPersonInTable = (personName) => {
    return persons.findIndex((person) => person.name === personName) > 0;
  };

  const submitPerson = (nameInput, numberInput) => {
    isPersonInTable(nameInput)
      ? alert("Name is already in the table")
      : setPersons(persons.concat({ name: nameInput, number: numberInput }));
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <PersonForm submitPerson={submitPerson} />
      <h2>Numerot</h2>
      <NumberTable persons={persons} />
    </div>
  );
};

export default App;
