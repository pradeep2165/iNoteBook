import React, { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";

export default function AddNote() {
  const {darkMode, addNote, showAlert} = useContext(noteContext)
  const [showAddNote, setShowAddNote] = useState(true);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handelClick = (e) => {
    e.preventDefault();
    addNote(note);
    showAlert("Note added", "success");
    setNote({ title: "", description: "", tag: "" });
    setShowAddNote(false)
  };
  const onChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <h1 onClick={()=>setShowAddNote(x=>!x)} className={`btn btn-${darkMode ? "secondary" : "primary" } bg-opacity-${darkMode ? "secondary" : "primary" }`}>Add Note</h1>
      <div className="col-12 col-md-4 ">
      {showAddNote &&<form className={`border border-1 rounded-3 p-4 border-success bg-${darkMode ? "secondary" : "primary" } bg-opacity-25` }>
        <div className="mb-3" >
          <label htmlFor="text" className={`form-label text-${darkMode ? "light" : "dark" }`}>
            Title
          </label>
          <input type="text" className="form-control" name="title" value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className={`form-label text-${darkMode ? "light" : "dark" }`}>
            Description
          </label>
          <input type="text" className="form-control" name="description" value={note.description} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className={`form-label text-${darkMode ? "light" : "dark" }`}>
            Tag
          </label>
          <input type="text" className="form-control" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <button disabled={(note.title.length < 3) | (note.description.length < 5)} onClick={handelClick} className={`btn btn-lg btn-${darkMode ? "dark":"success" } form-control`}>
          Save
        </button>
      </form>}
      </div>
    </div>
  );
}
