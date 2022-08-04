import { motion } from "framer-motion";
import styled from "styled-components";

import SubmitForm from "../components/SubmitForm/SubmitForm";

const NewOffBoard = () => {
  return (
    <motion.div
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <SubmitForm />
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
