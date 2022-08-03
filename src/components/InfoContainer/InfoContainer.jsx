import { MainContainer } from "./InfoContainer.styles"
import NameContainer from "./NameContainer" 
const InfoContainer = ({offBoardNames}) => {
  return (
  <MainContainer>
    <NameContainer offBoardNames={offBoardNames}/> 
    </MainContainer>
  )
}

export default InfoContainer