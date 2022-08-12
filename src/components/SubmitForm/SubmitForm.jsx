import { Container, HeaderFooter, Body, Form } from "./SubmitForm.styles";
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
  setDefCon,
  handleChange_modal,
  handleSubmit_modal,
  show,
  setShow,
  pageNumber,
  setPageNumber,
}) => {
  //Page state handler/render
  function selectPage() {
    //render page based on selected pageNumber
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
            setDefCon={setDefCon}
            setShow={() => setShow(true)}
          />
        );
      case 3:
        return <ThirdHalf setPageNumber={setPageNumber} />;
    }
  }

  return (
    <Container>
      <HeaderFooter>
        <h1> New Offhigher </h1>
      </HeaderFooter>
      <Body>
        <Form onSubmit={handleSubmit}>{selectPage()}</Form>
        <AddTaskModal
          show={show}
          onClose={() => setShow(false)}
          handleChange_modal={handleChange_modal}
          handleSubmit_modal={handleSubmit_modal}
        />
      </Body>
      <HeaderFooter></HeaderFooter>
    </Container>
  );
};

export default SubmitForm;
