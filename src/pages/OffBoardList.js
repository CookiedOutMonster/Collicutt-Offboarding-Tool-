import React from "react";
import SideBar from "../components/SideBar/SideBar";
import InfoContainer from "../components/InfoContainer/InfoContainer";
import { useState } from "react";
import { motion } from "framer-motion";

const OffBoardList = () => {
  //JSON dummy state
  const [offBoardNames, setOffBoardNames] = useState([
    {
      id: 1,
      name: "Gerren Hunter",
      urgency: 2,
      selected: false,
    },
    {
      id: 2,
      name: "Jerry Seinfield",
      urgency: 2,
      selected: false,
    },
    {
      id: 3,
      name: "Foo Bar",
      urgency: 1,
      selected: false,
    },
    {
      id: 4,
      name: "Bob the Builder",
      urgency: 1,
      selected: false,
    },
    {
      id: 5,
      name: "Mr. Bob Saget",
      urgency: 2,
      selected: false,
    },
    {
      id: 6,
      name: "Fuck Face",
      urgency: 3,
      seleced: false,
    },
    {
      id: 7,
      name: "Erlamier Greg",
      urgency: 1,
      selected: false,
    },
  ]);

  //Set offBoardNames selected to true based on id, false otherwise.
  function setSelected(id) {
    setOffBoardNames(
      offBoardNames.map((offBoard) =>
        offBoard.id === id
          ? { ...offBoard, selected: true }
          : { ...offBoard, selected: false }
      )
    );
  }
  //select offboard
  function selectOffboardID(id) {
    setSelected(id);
  }

  return (
    <>
      <SideBar
        offBoardNames={offBoardNames}
        selectOffBoard={selectOffboardID}
      />
      <InfoContainer offBoardNames={offBoardNames} />
    </>
  );
};

export default OffBoardList;
