import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";

export default function Signup() {
  const { showAlert, darkMode } = useContext(noteContext);
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
        showAlert(`Welcome ${data.email}`, "success");
      } else {
        showAlert(`${json.error}`, "danger");
      }
    } else {
      showAlert("Confirm password is not matching", "warning");
    }
  };
  return (
    <div className={`bg-${darkMode ? "dark":"primary"} bg-opacity-${darkMode ? "1":"10"} d-flex justify-content-center`} style={{height:"100vh"}}>
      <div className="col-md-4 col-12">
      <form onSubmit={handelSubmit} autoComplete="off" className={`border border-1 rounded-3 p-4 border-success bg-${darkMode ? "secondary" : "primary" } bg-opacity-25` }>
        <h3 className={`text-center text-${darkMode ? "light":"dark"}`}>Singup </h3>
        <hr className={`text-${darkMode ? 'light':'dark'}`}/>
        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">
          <label htmlFor="Name" className={`form-label text-${darkMode ? "light":"dark"}`}>
            Name
          </label>
          <div>
          <input type="text" className="form-control" name="name" onChange={onChange} minLength={3} required />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">
          <label htmlFor="exampleInputEmail1" className={`form-label text-${darkMode ? "light":"dark"}`}>
            Email address
          </label>
          <div>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">
          <label htmlFor="exampleInputPassword1" className={`form-label text-end text-${darkMode ? "light":"dark"}`}>
            Password
          </label>
          <div>

          <input type="password" className="form-control" name="password" onChange={onChange} autoComplete="off" minLength={5} required />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end gap-1 align-items-center">
          <div>
            <label className={`form-label text-end text-${darkMode ? "light":"dark"}`}>
            Confirm Password
          </label>
          </div>
          <div>
          <input type="password" className="form-control" name="cpassword" onChange={onChange} autoComplete="off" minLength={5} required />
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
