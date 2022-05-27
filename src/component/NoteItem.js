import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";


export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className="container">
            <h1>Yours Notes</h1>
            <div className="d-flex flex-wrap">
                {props.notes.map((note) => {
                    return (
                        <div key={note._id} className="card col-md-3 m-1 col-12">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title">{note.title}</h5>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                                        <i className="fa-solid fa-trash-can mx-2" onClick={() => { return deleteNote(note._id) }}></i>
                                    </div>
                                </div>
                                <p className="card-text">{note.description}</p>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    );
}
