import React from 'react'

export default function Alert(props) {
    return (
        <div className='container my-2' style={{ height: "50px" }}>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
