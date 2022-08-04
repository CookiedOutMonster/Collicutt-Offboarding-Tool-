import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OffBoardList from "./pages/OffBoardList";
import NewOffBoard from "./pages/NewOffBoard";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//NOTES:
//This references an object if a method inside a class
//Else, this references the window object if inside a function

//REACT does not like you messing around with DOM elements because that is not
//clean. Instead, REACT wants you to use hooks and state and whatnot.

//ANIMATION LIBRARIES: wants us to pass location property to the routes component.
//We can get the location from the "use location hook" from react-dom

function App() {
  const location = useLocation();
  return (
    <div className="overlay">
      <Navbar />
      <div className="overlay_layer">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<OffBoardList />} />
            <Route path="/newOffBoard" element={<NewOffBoard />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
