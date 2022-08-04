import { NavBar, NavItems_left, NavItems_link } from "./Navbar.styles";
import img1 from "../../Images/collicutt-energy.png";

//rafce
const Navbar = () => {
  return (
    <NavBar>
      <NavItems_left>
        <img src={img1} alt="Collicutt Energy" to="/" />
      </NavItems_left>
      <NavItems_link to="/">
        <h2>Offboard List</h2>
      </NavItems_link>
      <NavItems_link to="/newOffBoard">
        <h2>New Offboard</h2>
      </NavItems_link>
    </NavBar>
  );
};

export default Navbar;
