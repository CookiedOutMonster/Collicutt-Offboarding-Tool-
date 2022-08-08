import { FormStyles } from "./Halves.styles";

const SecondHalf = ({ setPageNumber, newOffBoard, defCon }) => {
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
        <h3>Tasks: For Urgency {newOffBoard.urgency} </h3>
        <ul>
          <p> IT </p>
          {whichDefCon().it.map((tasks) => (
            <li> {tasks} </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={changePage}>Prev </button>
        <button> Add Task </button>
        <button>Submit</button>
      </div>
    </FormStyles>
  );
};

export default SecondHalf;
