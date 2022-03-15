import React, { useState, useEffect } from "react";
import NumberTable from "./NumberTable";
import PersonForm from "./PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const isPersonInTable = (personName) => {
    return persons.findIndex((person) => person.name === personName) > 0;
  };

  const submitPerson = (nameInput, numberInput) => {
    isPersonInTable(nameInput)
      ? alert("Name is already in the table")
      : setPersons(persons.concat({ name: nameInput, number: numberInput }));
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
