import "./App.css";
import Navbar from "../src/component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/component/About";
import Form from "./component/Form";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/home" element={<Form />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
