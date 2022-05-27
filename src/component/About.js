
import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";


const About = () => {
    const a = useContext(noteContext)
    return (
        <div>
            this is about {a.name}
        </div>
    );
};
export default About;
