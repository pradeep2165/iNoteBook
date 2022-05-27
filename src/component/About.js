import React, { useContext, useEffect } from "react";
import noteContext from "../context/note/noteContext";

const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    return <div>this is about {a.state.name} in {a.state.class}</div>;
};
export default About;
