import { Container, OffBoardForm } from "./SubmitForm.styles";
import FirstHalf from "./FirstHalf";
import SecondHalf from "./SecondHalf";
import { useState } from "react";

const SubmitForm = ({ handleChange, handleSubmit, newOffBoard, defCon }) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Container>
      <h1> New Offhigher </h1>
      <form onSubmit={handleSubmit}>
        <div>
          {pageNumber === 1 ? (
            <FirstHalf
              handleChange={handleChange}
              newOffBoard={newOffBoard}
              setPageNumber={setPageNumber}
            />
          ) : (
            <SecondHalf
              setPageNumber={setPageNumber}
              newOffBoard={newOffBoard}
              defCon={defCon}
            />
          )}
        </div>
      </form>
    </Container>
  );
};

export default SubmitForm;
