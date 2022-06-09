import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const token = localStorage.getItem("token");

  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  //add note
  const addNote = async (data) => {
    const token = localStorage.getItem("token");
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    setNotes(notes.concat(json));
  };
  // //delete note
  const deleteNote = async (id) => {
    //api call
    const token = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/delete_note/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // //edit note
  const editNote = async (data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/update_note/${data._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    // api call
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === json._id) {
        newNotes[index].title = json.title;
        newNotes[index].description = json.description;
        newNotes[index].tag = json.tag;
        break;
      }
    }
    setNotes(newNotes);
  };

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

  return <NoteContext.Provider value={{ getNotes, notes, addNote, deleteNote, editNote, alert, showAlert }}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
