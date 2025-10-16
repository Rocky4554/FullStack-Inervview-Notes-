import React from 'react'
import Accordian from "./Accordioan"
import "./parent.css"

const parent = () => {
    const data=[
         { id:1,title: "What is React?", content: "React is a JavaScript library for building UIs." },
    { id:2,title: "What is useState?", content: "useState is a Hook to manage state in functional components." },
    { id:3,title: "What is JSX?", content: "JSX lets you write HTML-like syntax in React." },
    ]
  return (
    <div className="container">
        <h1>Hello Accordian</h1>
        <div className="acc-container">{data.map((it)=>(
            <Accordian key={it.id} title={it.title} content={it.content}/>
        ))}</div>

    </div>
  )
}

export default parent