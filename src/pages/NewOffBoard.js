import { motion } from "framer-motion";
import styled from "styled-components";
import SubmitForm from "../components/SubmitForm/SubmitForm";
import { useState } from "react";

const NewOffBoard = () => {
  const [newOffBoard, setNewOffBoard] = useState({
    name: " ",
    urgency: " ",
  });

  const [defCon, setDefCon] = useState({
    defCon1: {
      it: "Cancel email account",
      hr: "Cancel credit cards",
    },
    defCon2: {
      it: "Jibber jabber wagger",
      hr: "Wibber wabber",
    },
    defCon3: {
      it: "AHHH",
      hr: "sd;ljgdfgksdfg",
      it: "EGADS !",
      safety: "ASD@",
    },
  });

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
    <motion.div
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <SubmitForm
          newOffBoard={newOffBoard}
          setNewOffBoard={setNewOffBoard}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          defCon={defCon}
        />
      </Container>
    </motion.div>
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
