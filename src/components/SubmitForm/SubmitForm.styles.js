import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    height: 30%;
    margin-top: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
