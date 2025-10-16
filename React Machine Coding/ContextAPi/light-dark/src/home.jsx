import React from 'react'
import { useTheme } from "./ContextAPI/context";
import './home.css'

const home = () => {
     const { theme, toggle } = useTheme();
  return (
    <div className='main'>
        <h1 className='heading'>{theme=="light"?"Light mode":"Night Mode"}</h1>
        <button className="btn" onClick={toggle}>Change theme</button>
    </div>
  )
}

export default home;