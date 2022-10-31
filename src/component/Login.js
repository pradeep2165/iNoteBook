import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";

export default function Login() {
  const { showAlert, darkMode } = useContext(noteContext);
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
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
      showAlert(`Welcome ${data.email}`, "success");
    } else {
      showAlert(`Invalid Credential`, "danger");
    }
  };
  return (
    <div className={`bg-${darkMode ? "dark":"primary"} bg-opacity-${darkMode ? "1":"10"} d-flex justify-content-center`} style={{height:"100vh"}}>

    <div className="col-md-4 col-12">
      <form onSubmit={handelSubmit} className={`border border-1 rounded-3 p-4 border-success bg-${darkMode ? "secondary" : "primary" } bg-opacity-25` }>
        <h3 className={`text-center text-${darkMode ? "light":"dark"}`}>Login </h3>
        <hr className={`text-${darkMode ? 'light':'dark'}`}/>

        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">        
          <label htmlFor="exampleInputEmail1" className={`form-label text-${darkMode ? "light":"dark"}`}>
            Email address
          </label>
          <div>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={onChange} autoComplete="off" required />
          </div>
        </div>
        
        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">
          <label htmlFor="exampleInputPassword1" className={`form-label text-${darkMode ? "light":"dark"}`}>
            Password
          </label>
          <div>
          <input type="password" className="form-control" name="password" onChange={onChange} autoComplete="off" required />
          </div>
        </div>
        <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}
