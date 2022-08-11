import { Container, OffBoardForm } from "./SubmitForm.styles";
import FirstHalf from "./FirstHalf";
import SecondHalf from "./SecondHalf";
import ThirdHalf from "./ThirdHalf";
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
  pageNumber,
  setPageNumber,
}) => {
  function selectPage() {
    switch (pageNumber) {
      case 1:
        return (
          <FirstHalf
            handleChange={handleChange}
            newOffBoard={newOffBoard}
            setPageNumber={setPageNumber}
          />
        );
      case 2:
        return (
          <SecondHalf
            setPageNumber={setPageNumber}
            newOffBoard={newOffBoard}
            defCon={defCon}
            setShow={() => setShow(true)}
          />
        );
      case 3:
        return <ThirdHalf />;
    }
  }

  return (
    <Container>
      <h1> New Offhigher </h1>
      <form onSubmit={handleSubmit}>
        <div>{selectPage()}</div>
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

/*
{
          
          
          pageNumber === 1 ? (
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
*/
