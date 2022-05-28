import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const json = await response.json()
        if (json.success) {
            //save the auth-token and redirect;
            localStorage.setItem('token', json.authtoken);
            navigate("/", { replace: true })
        } else {
            alert("invalid credential");
        }

    }
    return (
        <div className="container my-3">
            <form onSubmit={handelSubmit}>
                <h3>Login </h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={onChange} autoComplete="off" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
