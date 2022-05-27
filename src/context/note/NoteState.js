import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Get all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            }

        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }
    //add note
    const addNote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            },
            body: JSON.stringify(title, description, tag)
        });


        const note = {
            "_id": "62905150bcedef05109f88",
            "user": "628f25ff4b6949847504ec96",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-05-27T04:19:28.246Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    };
    // //delete note
    const deleteNote = async (id) => {
        //api call
        const response = await fetch(`${host}/api/notes/delete_note/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            },
            body: JSON.stringify(id)
        });
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    };
    // //edit note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/update_note/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            },
            body: JSON.stringify(title, description, tag)
        });
        const json = response.json();
        //api call
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }

    };
    return <NoteContext.Provider value={{ getNotes, notes, addNote, deleteNote, editNote }}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
