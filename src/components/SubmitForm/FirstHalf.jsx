import React from "react";
import { FormStyles, Items } from "./Halves.styles";

const FirstHalf = ({ handleChange, newOffBoard, setPageNumber }) => {
  let printError = false;
  function changePage() {
    setPageNumber(2);
  }

  return (
    <FormStyles>
      <Items className={"height-33"}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          value={newOffBoard.name}
          required
        />
      </Items>
      <Items className={"height-33"}>
        <label>Urgency:</label>
        <select
          name="urgency"
          onChange={(e) => handleChange(e)}
          value={newOffBoard.urgency}
          required
        >
          <option> Please select </option>
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
        </select>
      </Items>
      <Items className={"height-33"}>
        <button onClick={changePage} className={"width-50 buttonStyle"}>
          Next
        </button>
      </Items>
    </FormStyles>
  );
};

export default FirstHalf;
