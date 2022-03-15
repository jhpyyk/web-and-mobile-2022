import React, { useState } from "react";

const PersonForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitPerson(nameInput, numberInput);
    setNameInput("");
    setNumberInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        nimi:{" "}
        <input
          value={nameInput}
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
        />
      </div>
      <div>
        numero:{" "}
        <input
          value={numberInput}
          onChange={(event) => {
            setNumberInput(event.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  );
};

export default PersonForm;
