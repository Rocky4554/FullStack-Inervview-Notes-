import React from 'react';
import "./App.css"
import Todo from "./components/todo"
import Calculator from "./components/calculator/cal"
import Accordian from "./components/Accordian/parent.jsx"

const App=()=>{
  return (
    <div>
      <h1 className="heading">All My Creations</h1>
      {/* <Todo/> */}
      {/* <Calculator/> */}
      <Accordian/>
    </div>
  )
}

export default App;