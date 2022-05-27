import React from 'react'

export default function NoteItem(props) {
    return (
        <div className='container my-3'>
            <h1>Your Notes</h1>
            <div className="d-flex flex-wrap">
                {props.notes.map((note) => {
                    return (
                        <div className='col-md-3'>
                            <div className='card p-2 m-2'>
                                <h5 className="card-body">{note.title}</h5>
                                <p className="card-title">{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit rerum consectetur eos mollitia magnam deleniti expedita sint voluptate asperiores possimus sapiente et magni, fugit quas ullam quibusdam fugiat eligendi?
                                </p>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
