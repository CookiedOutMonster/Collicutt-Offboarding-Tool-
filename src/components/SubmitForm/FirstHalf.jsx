import React from "react";
import { FormStyles } from "./Halves.styles";

const FirstHalf = ({ handleChange, newOffBoard, setPageNumber }) => {
  let printError = false;
  function changePage() {
    setPageNumber(2);
  }

  return (
    <FormStyles>
      <div>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          value={newOffBoard.name}
          required
        />
      </div>
      <div>
        <label>Urgency:</label>
        <select
          name="urgency"
          onChange={(e) => handleChange(e)}
          value={newOffBoard.urgency}
          required
        >
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
        </select>
      </div>
      <div>
        <button onClick={changePage}>Next</button>
      </div>
    </FormStyles>
  );
};

export default FirstHalf;
