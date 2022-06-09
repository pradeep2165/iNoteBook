import React, { useContext, useEffect } from "react";
import noteContext from "../context/note/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const context = useContext(noteContext);
  let navigate = useNavigate();

  const { notes, getNotes } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AddNote />
      <NoteItem notes={notes} />
    </>
  );
}
