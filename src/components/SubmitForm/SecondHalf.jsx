import { FormStyles } from "./Halves.styles";
import AddTaskModal from "../Modal/AddTaskModal";
import { useState } from "react";

const SecondHalf = ({ setPageNumber, newOffBoard, defCon, setShow }) => {
  function changePage() {
    setPageNumber(1);
  }

  function whichDefCon() {
    const number = newOffBoard.urgency;
    let selectedDefCon;
    switch (number) {
      case "1":
        selectedDefCon = defCon[0];
        break;
      case "2":
        selectedDefCon = defCon[1];
        break;
      case "3":
        selectedDefCon = defCon[2];
        break;
    }

    //console.log(selectedDefCon);

    return selectedDefCon;
  }

  return (
    <FormStyles>
      <div>
        <h3>Urgency {newOffBoard.urgency} Tasks </h3>
        <ul>
          <p> IT </p>
          {whichDefCon().it.map((tasks) => (
            <li> {tasks} </li>
          ))}
          <p> HR </p>
          {whichDefCon().hr.map((tasks) => (
            <li> {tasks} </li>
          ))}
        </ul>
      </div>

      <button onClick={setShow} type="button">
        Add Task
      </button>

      <div>
        <button onClick={changePage}>Prev </button>
        <button> Submit</button>
      </div>
    </FormStyles>
  );
};

export default SecondHalf;
