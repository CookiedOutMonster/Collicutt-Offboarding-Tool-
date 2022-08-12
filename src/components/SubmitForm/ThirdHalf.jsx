import { FormStyles } from "./Halves.styles";
export const ThirdHalf = ({ setPageNumber }) => {
  return (
    <FormStyles>
      <h3> New offboard submitted </h3>
      <button onClick={() => setPageNumber(1)}> Submit a new Offboard </button>
    </FormStyles>
  );
};

export default ThirdHalf;
