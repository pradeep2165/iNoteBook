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
        setNotes(json);
    }
    //add note
    const addNote = async (data) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {

            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();

        setNotes(notes.concat(json));
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

        });
        const json = await response.json()
        console.log(json);

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    };
    // //edit note
    const editNote = async (data) => {
        const response = await fetch(`${host}/api/notes/update_note/${data._id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4ZjI1ZmY0YjY5NDk4NDc1MDRlYzk2In0sImlhdCI6MTY1MzU0ODU5NX0.o5EV8uh8CU-CJ_nquyiKcNwS1mS4lP_xItlYLtW2TZk"
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
        let newNotes = JSON.parse(JSON.stringify(notes))
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
    return <NoteContext.Provider value={{ getNotes, notes, addNote, deleteNote, editNote }}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
