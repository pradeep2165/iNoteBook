import React, { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })
    const handelClick = (e) => {
        e.preventDefault();
        addNote(note);
        props.showAlert("Note added", "success");
        setNote({ title: "", description: "", tag: "" });
    }
    const onChange = (e) => {
        e.preventDefault();
        setNote({ ...note, [e.target.name]: e.target.value });

    }
    return (
        <div className="mt-4 m-2">
            <h1>Add a Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Title
                    </label>
                    <input type="text" className="form-control" name="title" value={note.title} onChange={onChange} />
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
                    <input type="text" className="form-control" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 3 | note.description.length < 5} onClick={handelClick} className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
}
