import React ,{useState}from 'react'
import "./accordion.css"

const Accordian=({title , content})=>{
    const [open,setOpen]=useState(false);

    const handletoggle=()=>{setOpen(!open)}

    return(
        <div className='main'>
            <div className='title'>
                <h1>{title}</h1>
                <button onClick={handletoggle}className='open-close'>{open?" - ":" + "}</button>
            </div>
            {open && (<div className='content'>{content}</div>)}
            
        </div>
    )

}

export default Accordian;