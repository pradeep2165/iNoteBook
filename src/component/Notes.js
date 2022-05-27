import React, { useContext } from 'react'
import noteContext from '../context/note/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;

    return (
        <>
            <AddNote />
            <NoteItem notes={notes} />

        </>
    )
}
