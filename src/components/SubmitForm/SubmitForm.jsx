import { Container, OffBoardForm } from "./SubmitForm.styles";
import FirstHalf from "./FirstHalf";
import SecondHalf from "./SecondHalf";
import { useState } from "react";
import AddTaskModal from "../Modal/AddTaskModal";

const SubmitForm = ({
  handleChange,
  handleSubmit,
  newOffBoard,
  defCon,
  handleChange_modal,
  handleSubmit_modal,
  show,
  setShow,
}) => {
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
              setShow={() => setShow(true)}
            />
          )}
        </div>
      </form>
      <AddTaskModal
        show={show}
        onClose={() => setShow(false)}
        handleChange_modal={handleChange_modal}
        handleSubmit_modal={handleSubmit_modal}
      />
    </Container>
  );
};

export default SubmitForm;
