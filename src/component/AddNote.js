import React, { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";

export default function AddNote() {
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
                    <input type="text" className="form-control" name="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input type="text" className="form-control" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        Tag
                    </label>
                    <input type="text" className="form-control" name="tag" onChange={onChange} />
                </div>
                <button onClick={handelClick} className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
}
