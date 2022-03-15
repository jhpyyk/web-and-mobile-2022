import React, { useState } from "react";

const PersonForm = (props) => {
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitPerson(nameInput);
    setNameInput("");
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
        <button type="submit">lisää</button>
      </div>
    </form>
  );
};

export default PersonForm;
