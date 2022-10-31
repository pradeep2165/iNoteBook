import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";

export default function Alert() {
  const { alert } = useContext(noteContext);
  const {darkMode} = useContext(noteContext);
  return (
    <div className={`bg-${darkMode ? "dark":"primary"} bg-opacity-${darkMode ? "1":"10"}`}>
      <div className="container container-md" style={{ height: "50px"}}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type === "success" ? "Success" : "Error"}</strong>: {alert.msg}
        </div>
      )}
    </div>
    </div>
  );
}
