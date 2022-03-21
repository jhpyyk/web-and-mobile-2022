import React from "react";

const NumberEntry = (props) => {
  return (
    <tr>
      <td>{props.numberEntry.name}</td>
      <td>{props.numberEntry.number}</td>
      <td>
        <button onClick={() => props.deleteNumberEntry(props.numberEntry.id)}>
          Poista
        </button>
      </td>
    </tr>
  );
};

export default NumberEntry;
