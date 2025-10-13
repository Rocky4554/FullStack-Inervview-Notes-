import React from 'react';
import "./App.css"
import Todo from "./components/todo"

const App=()=>{
  return (
    <div>
      <h1 className="heading">This is a Todo App </h1>
      <Todo/>
    </div>
  )
}

export default App;