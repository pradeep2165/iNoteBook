import React, { useContext, useRef, useState } from "react";
import noteContext from "../context/note/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote, editNote, showAlert, darkMode } = context;
  const ref = useRef(null);
  const refclose = useRef(null);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
  };

  const handelClick = (e) => {
    e.preventDefault();
    editNote(note);
    refclose.current.click();
    showAlert("Note Updated", "success");
  };
  const onChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-4 m-2" >
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content bg-${darkMode ? "dark":"info"} text-light bg-${darkMode ? "opacity-100":"opacity-50"}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update
              </h5>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="text" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" value={note.title} name="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input type="text" className="form-control" name="tag" onChange={onChange} value={note.tag} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button disabled={(note.title.length < 3) | (note.description.length < 5)} type="button" className="btn btn-primary" onClick={handelClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className={`text-${darkMode ? "light":"dark"}`}>Yours Notes</h1>

        <div className="d-flex justify-content-center flex-wrap gap-1">
        {props.notes.length === 0 && "No notes to display"}
        {props.notes.map((note) => {
          return (
            <div key={note._id} className="card col-md-3 col-12">
              <div className= {`card-body rounded-2 bg-${darkMode ? "dark" : "primary" } bg-${darkMode ? "opacity-100" : "opacity-50" }`}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className={`card-title text-${darkMode ? "light" :"dark"}`}>{note.title}</h5>
                  </div>
                  <div>
                    <i className="fa-solid fa-pen-to-square mx-2 text-success" onClick={() => updateNote(note)}></i>
                    <i
                      className="fa-solid fa-trash-can mx-2 text-danger"
                      onClick={() => {
                        deleteNote(note._id);
                        showAlert("Note deleted", "success");
                      }}
                    ></i>
                  </div>
                </div>
                <p className={`card-text text-${darkMode ? "light" :"dark"}`}>{note.description}</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
