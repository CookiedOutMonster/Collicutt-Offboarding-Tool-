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
        selectedDefCon = defCon.defCon1;
        break;
      case "2":
        selectedDefCon = defCon.defCon2;
        break;
      case "3":
        selectedDefCon = defCon.defCon3;
        break;
    }
    return selectedDefCon;
  }

  //whichDefCon();

  const ohmy = ["oh", "my", "god"];

  console.log(whichDefCon());

  return (
    <FormStyles>
      <div>
        <h3>Tasks: Urgency {newOffBoard.urgency} </h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <button onClick={changePage}>Prev </button>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </FormStyles>
  );
};

export default SecondHalf;
