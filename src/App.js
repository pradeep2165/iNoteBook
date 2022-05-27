// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/note/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
