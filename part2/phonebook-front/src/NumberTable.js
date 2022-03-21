import React from "react";
import NumberEntry from "./NumberEntry";

const NumberTable = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {props.numberEntries.map((entry) => (
            <NumberEntry
              numberEntry={entry}
              key={entry.name}
              deleteNumberEntry={props.deleteNumberEntry}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;
