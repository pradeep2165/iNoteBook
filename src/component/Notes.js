import React, { useContext } from 'react'
import noteContext from '../context/note/noteContext';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (

        <NoteItem notes={notes} />

    )
}
