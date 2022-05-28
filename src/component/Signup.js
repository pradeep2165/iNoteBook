import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const onChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        if (data.password === data.cpassword) {
            // delete data['cpassword'];

            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (json.success) {
                //save the auth-token and redirect;
                localStorage.setItem("token", json.authtoken);
                navigate("/", { replace: true });
                props.showAlert(`Welcome ${data.email}`, "success");
            } else {
                props.showAlert(`${json.error}`, "danger");
            }

        } else {
            props.showAlert("Confirm password is not matching", "warning");
        }

    };
    return (
        <div className="container my-3">
            <form onSubmit={handelSubmit} autoComplete="off">
                <h3>Singup </h3>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" name="name" onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" name="password" onChange={onChange} autoComplete="off" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Confirm Password
                    </label>
                    <input type="password" className="form-control" name="cpassword" onChange={onChange} autoComplete="off" minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
