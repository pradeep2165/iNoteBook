import { useState } from "react";
import NoteContext from "./noteContext";



const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62905150bcede09f05109f88",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programming",
            "tag": "personal",
            "date": "2022-05-27T04:19:28.246Z",
            "__v": 0
        },
        {
            "_id": "629053de7dd8ec1893dfb0a3",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:30:22.408Z",
            "__v": 0
        },
        {
            "_id": "6290563cc6a888ce243ae271",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:40:28.402Z",
            "__v": 0
        },
        {
            "_id": "6290563dc6a888ce243ae273",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:40:29.488Z",
            "__v": 0
        },
        {
            "_id": "6290563ec6a888ce243ae275",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:40:30.301Z",
            "__v": 0
        },
        {
            "_id": "6290563ec6a888ce243ae277",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:40:30.984Z",
            "__v": 0
        },
        {
            "_id": "6290563fc6a888ce243ae279",
            "user": "628f25ff4b6949847504ec96",
            "title": "my work",
            "description": "programing",
            "tag": "personal",
            "date": "2022-05-27T04:40:31.735Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;