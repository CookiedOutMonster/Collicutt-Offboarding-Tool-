import { FormStyles } from "./Halves.styles";

const SecondHalf = ({ setPageNumber, newOffBoard, defCon }) => {
  function changePage() {
    setPageNumber(1);
  }

  const number = newOffBoard.urgency;
  const whichDefCon = "defCon" + number;
  const selectedDefCon = defCon.whichDefCon;

  console.log(selectedDefCon);

  //console.log(defCon[defCon2]);

  return (
    <FormStyles>
      <div>
        <h3>Tasks: Urgency {newOffBoard.urgency} </h3>
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
