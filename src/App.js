import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar title="KL UNIVERSITY" aboutText="ABOUT" />
      <Routes>
        <Route
          path="/"
          element={<Textbox heading="Example Text here to analyze :" />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
