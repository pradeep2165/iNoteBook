import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/note/noteContext';

const Footer = () => {
const {darkMode} = useContext(noteContext);
  return (
    <div className= {`bg-${darkMode ? "dark":"primary"} bg-gradient bg-opacity-${darkMode ? "1":"25"}`  }>
        <div>
        <p className={`text-center text-${darkMode ? 'light': "dark"} p-3`} >   {new Date().getFullYear() } All Right Reserved built by Predeep</p>
        </div>
    </div>
  )
}

export default Footer
