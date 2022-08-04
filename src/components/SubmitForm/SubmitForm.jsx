import { Container, OffBoardForm } from "./SubmitForm.styles";
//welcome to div hell
export const SubmitForm = () => {
  return (
    <Container>
      <h1> New Offhigher </h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Urgency:</label>
          <input type="text" />
        </div>
        <div>
          <label>Tasks:</label>
          <input type="text" />
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </Container>
  );
};

export default SubmitForm;
