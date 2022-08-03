import styled from "styled-components";

//NOTES:
//Padding -> Creates space inside element
//Margin ->  Creates space outside element
//Difference: Padding is inside and margin is outside

export const SideBarContainer = styled.div`
  background: white;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;

  ul {
    list-style: none;
    overflow: auto;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid black;
    width: 100%;
    height: 20%;

    h2 {
      position: absolute;
      top: 0px;
      left: 0px;
      margin-left: 1em;
    }

    p {
      position: absolute;
      top: 0px;
      right: 0px;
      margin-right: 1em;
    }
  }
`;

export const MainColumn = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  height: 20%;

  h1 {
    margin-left: 1em;
  }
`;
