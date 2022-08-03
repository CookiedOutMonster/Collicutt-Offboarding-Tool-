import styled from "styled-components";

export const MainContainer = styled.div`
  /* border: 2px solid black; */
  position: relative;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const NameDiv = styled.div`
  /* border: 2px solid green; */
  position: fixed;
  width: 68.3%;
  height: 20%;

  h1 {
    position: absolute;
    font-size: 4em;
    top: 10%;
    left: 7%;
  }

  h3 {
    position: absolute;
    top: 33%;
    right: 7%;
    font-size: 2em;
  }
`;
