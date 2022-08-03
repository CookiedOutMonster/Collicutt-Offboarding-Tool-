import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OffBoardList from "./pages/OffBoardList";
import NewOffBoard from "./pages/NewOffBoard";
import { Route, Routes } from "react-router-dom";
import img1 from "./Images/collicutt-energy.png";

//NOTES:
//This references an object if a method inside a class
//Else, this references the window object if inside a function

//REACT does not like you messing around with DOM elements because that is not
//clean. Instead, REACT wants you to use hooks and state and whatnot.

function App() {
  return (
    <div className="overlay">
      <Navbar logo={img1} />
      <div className="overlay_layer">
        <Routes>
          <Route path="/" element={<OffBoardList />} />
          <Route path="/newOffBoard" element={<NewOffBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
