import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//using props:

//background-color: ${(props) => props.backgroundColor }
//the ${} refers to adding javascript syntax inside of a string
//creating an arrow function where it takes in props which is the object
//and we access the attribute props.backgroundColor

//So this seems like a way I can export css elements as
//JSX objects

export const NavBar = styled.nav`
  background: white;
  height: 11%;
  display: flex;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  border-bottom: 2px solid black;
`;
export const NavItems_left = styled.div`
  color: var(--text_primary);
  display: flex;
  height: 100%;
  width: 60%;
  align-items: center;

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin-left: 2em;
  }

  img {
    width: 200px;
    margin-left: 2em;
  }
`;
export const NavItems_link = styled(Link)`
  color: var(--text_primary);
  display: flex;
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  h2 {
    font-size: 2em;
  }
`;
