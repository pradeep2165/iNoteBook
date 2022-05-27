import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            _id: "62905150bcede09f05109f88",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programming",
            tag: "personal",
            date: "2022-05-27T04:19:28.246Z",
            __v: 0,
        },
        {
            _id: "629053de7dd8ec1893dfb0a3",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:30:22.408Z",
            __v: 0,
        },
        {
            _id: "6290563cc6a888ce243ae271",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:40:28.402Z",
            __v: 0,
        },
        {
            _id: "6290563dc6a888ce243ae273",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:40:29.488Z",
            __v: 0,
        },
        {
            _id: "6290563ec6a888ce243ae275",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:40:30.301Z",
            __v: 0,
        },
        {
            _id: "6290563ec6a888ce243ae277",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:40:30.984Z",
            __v: 0,
        },
        {
            _id: "6290563fc6a888ce243ae279",
            user: "628f25ff4b6949847504ec96",
            title: "my work",
            description: "programing",
            tag: "personal",
            date: "2022-05-27T04:40:31.735Z",
            __v: 0,
        },
    ];
    const [notes, setNotes] = useState(notesInitial);

    //add note
    const addNote = (title, description, tag) => {
        //api call
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
    const deleteNote = (id) => {
        //api call
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    };
    // //edit note
    const editNote = (id, title, description, tag) => {

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
    return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>{props.children}</NoteContext.Provider>;
};
export default NoteState;
