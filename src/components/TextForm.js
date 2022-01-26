import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here:');
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div class="d-grid gap-2">
            <button className="btn btn-outline-primary" onClick={handleUpClick}>Convert to UpperCase </button>
            <button className="btn btn-outline-primary" onClick={handleLowerClick}>Convert to LowerCase </button>
            </div>
        </div>
        
        )
    };