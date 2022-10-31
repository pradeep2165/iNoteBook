import React from "react";
import { useContext } from "react";
import noteContext from "../context/note/noteContext";
import Notes from "./Notes";

export default function Home() {
const {darkMode} = useContext(noteContext)
  return (
    <div className={`bg-${darkMode? "dark":"primary"} bg-opacity-${darkMode? "1":"10"} overflow-auto`} style={{height:"100vh"}}>
      <Notes />
    </div>
  );
}
