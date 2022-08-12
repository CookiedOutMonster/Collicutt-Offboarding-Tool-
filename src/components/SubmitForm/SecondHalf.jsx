import {
  FormStyles,
  Items,
  SquareButton,
  ButtonContainer,
} from "./Halves.styles";
import AddTaskModal from "../Modal/AddTaskModal";
import { useState } from "react";

const SecondHalf = ({
  setPageNumber,
  newOffBoard,
  defCon,
  setDefCon,
  setShow,
}) => {
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
    return selectedDefCon;
  }

  function handleDelete(taskType, tasks) {
    const temp = [...defCon];
    const edited = temp[parseInt(newOffBoard.urgency) - 1];
    let index;
    switch (taskType) {
      case "it":
        index = edited.it.indexOf(tasks);
        edited.it.splice(index, 1);
        break;
      case "hr":
        index = edited.hr.indexOf(tasks);
        edited.hr.splice(index, 1);
        break;
    }
    setDefCon(temp);
  }

  return (
    <FormStyles>
      <Items className={"height-25"}>
        <h3>Urgency: {newOffBoard.urgency} Tasks </h3>
      </Items>
      <Items className={"height-50 scrollable"}>
        <ul>
          <p> IT </p>
          {whichDefCon().it.map((tasks) => (
            <li onClick={() => handleDelete("it", tasks)}> {tasks} </li>
          ))}
          <p> HR </p>
          {whichDefCon().hr.map((tasks) => (
            <li onClick={() => handleDelete("hr", tasks)}> {tasks} </li>
          ))}
        </ul>
      </Items>
      <ButtonContainer className={"height-25"}>
        <SquareButton onClick={changePage}>Previous</SquareButton>
        <SquareButton onClick={setShow} type="button">
          Add Task
        </SquareButton>
        <SquareButton> Submit</SquareButton>
      </ButtonContainer>
    </FormStyles>
  );
};

export default SecondHalf;
