import React, { useState, useEffect } from "react";
import NumberTable from "./NumberTable";
import NumberForm from "./NumberForm";
import numberService from "./services/numbers";

const App = () => {
  const [numberEntries, setNumberEntries] = useState([]);

  const isNameInTable = (name) => {
    return (
      numberEntries.findIndex((numberEntry) => numberEntry.name === name) >= 0
    );
  };

  const submitNumberEntry = (nameInput, numberInput) => {
    if (!isNameInTable(nameInput)) {
      let numberEntry = { name: nameInput, number: numberInput };

      numberService.create(numberEntry).then((response) => {
        setNumberEntries(numberEntries.concat(response.data));
      });
    } else {
      alert("Name is already in the table");
    }
  };

  const deleteNumberEntry = (id) => {
    let name = numberEntries.find((element) => element.id === id).name;
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      numberService
        .deleteById(id)
        .then(
          setNumberEntries(numberEntries.filter((entry) => entry.id !== id))
        );
    }
  };

  const updateEntries = () => {
    numberService.getAll().then((response) => {
      setNumberEntries(response.data);
    });
  };

  useEffect(() => {
    updateEntries();
  }, []);

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <NumberForm submitNumberEntry={submitNumberEntry} />
      <h2>Numerot</h2>
      <NumberTable
        numberEntries={numberEntries}
        deleteNumberEntry={deleteNumberEntry}
      />
    </div>
  );
};

export default App;
