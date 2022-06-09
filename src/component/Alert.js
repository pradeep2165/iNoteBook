import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";

export default function Alert() {
  const { alert } = useContext(noteContext);
  return (
    <div className="container" style={{ height: "50px" }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type === "success" ? "Success" : "Error"}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}
