import React, { useContext, useEffect } from "react";
import noteContext from "../context/note/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export default function Notes() {
    const context = useContext(noteContext);

    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <AddNote />
            <NoteItem notes={notes} />
        </>
    );
}
