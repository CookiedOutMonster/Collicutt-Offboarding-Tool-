import { motion } from "framer-motion";
import styled from "styled-components";
import SubmitForm from "../components/SubmitForm/SubmitForm";
import { useState } from "react";

const NewOffBoard = () => {
  const [show, setShow] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);

  const [addTask, setAddedTask] = useState({
    chooseRole: "",
    taskDescription: "",
  });

  const [newOffBoard, setNewOffBoard] = useState({
    name: " ",
    urgency: " ",
    it: [],
    hr: [],
  });

  const [defCon, setDefCon] = useState([
    {
      id: 1,
      it: ["Deactivate Versago", "forward emails", "decative email address"],
      hr: ["Cancel credit card"],
    },
    {
      id: 2,
      it: [
        "Deactivate Versago",
        "forward emails",
        "decative email address",
        "Cancel login",
      ],
      hr: ["Cancel credit card", "Take off payroll"],
    },
    {
      id: 3,
      it: ["Scorch the earth"],
      hr: ["Scorch the earth"],
    },
  ]);

  const handleChange = (e) => {
    setNewOffBoard({ ...newOffBoard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newOffBoard);
    setNewOffBoard({ name: "", urgency: "" });
    setPageNumber(3);
  };

  const handleChange_modal = (e) => {
    setAddedTask({ ...addTask, [e.target.id]: e.target.value });
  };

  const handleSubmit_modal = (e) => {
    e.preventDefault();
    const whichTask = addTask.chooseRole;
    const addedTask = addTask.taskDescription;
    const temp = [...defCon];
    const edited = temp[parseInt(newOffBoard.urgency) - 1];
    whichTask === "IT" ? edited.it.push(addedTask) : edited.hr.push(addedTask);
    setDefCon(temp);
    setShow(false);
  };

  return (
    <Container>
      <SubmitForm
        newOffBoard={newOffBoard}
        setNewOffBoard={setNewOffBoard}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChange_modal={handleChange_modal}
        handleSubmit_modal={handleSubmit_modal}
        defCon={defCon}
        show={show}
        setShow={setShow}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Container>
  );
};

export default NewOffBoard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
  }
`;
