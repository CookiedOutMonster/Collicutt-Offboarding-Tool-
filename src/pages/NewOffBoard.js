import { motion } from "framer-motion";
import styled from "styled-components";
import SubmitForm from "../components/SubmitForm/SubmitForm";
import { useState } from "react";

const NewOffBoard = () => {
  const [newOffBoard, setNewOffBoard] = useState({
    name: " ",
    urgency: " ",
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
    //So the issue is what I expected, you must spread accross the previous
    //updated value into setNewOffBoard otherwise it just gets rewritten
    setNewOffBoard({ ...newOffBoard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newOffBoard);
    setNewOffBoard({ name: "", urgency: "" });
  };

  return (
    <Container>
      <SubmitForm
        newOffBoard={newOffBoard}
        setNewOffBoard={setNewOffBoard}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        defCon={defCon}
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
