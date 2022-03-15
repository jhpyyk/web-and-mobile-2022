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
    if (!isPersonInTable(nameInput)) {
      let person = { name: nameInput, number: numberInput };
      axios.post("http://localhost:3001/persons", person).then((response) => {
        setPersons(persons.concat(response.data));
      });
    } else {
      alert("Name is already in the table");
    }
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
