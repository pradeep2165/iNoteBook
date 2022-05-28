// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/note/NoteState";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home showAlert={showAlert} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
