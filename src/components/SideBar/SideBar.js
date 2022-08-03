import { SideBarContainer, MainColumn } from "../SideBar/SideBar.styles";
import ListName from "./ListName";

const SideBar = ({ offBoardNames, selectOffBoard }) => {
  return (
    <SideBarContainer id="sideBar">
      <MainColumn>
        <h1> </h1>
      </MainColumn>
      <ul>
        {offBoardNames.map((offBoard) => (
          <ListName
            key={offBoard.id}
            name={offBoard.name}
            urgency={offBoard.urgency}
            id={offBoard.id}
            selectOffBoard={selectOffBoard}
            selected={offBoard.selected}
          />
        ))}
      </ul>
    </SideBarContainer>
  );
};

export default SideBar;
