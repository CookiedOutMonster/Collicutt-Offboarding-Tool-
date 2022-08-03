import React from 'react'
import { NameDiv } from "./InfoContainer.styles"

const NameContainer = ({offBoardNames}) => {
  return (
    <NameDiv> 
        <h1> {offBoardNames.map((offBoard) =>offBoard.selected ? offBoard.name : "")} </h1>
        <h3> {offBoardNames.map((offBoard) =>offBoard.selected ? "Urgency: " + offBoard.urgency : "")}</h3>
    </NameDiv>
  )
}

export default NameContainer