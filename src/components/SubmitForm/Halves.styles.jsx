import styled from "styled-components";

export const FormStyles = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 0.8em;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1em;
  margin-right: 1em;
`;

export const Items = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    padding: 0.5em;
  }

  input {
    width: 50%;
  }

  select {
    width: 50%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const SquareButton = styled.button`
  height: 70%;
  width: 30%;
  background-color: var(--color_selected);
  color: var(--color_primary);
  border: none;
`;
