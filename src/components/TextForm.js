import React, {
    useState
} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleCrClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Text Cleared", "danger")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "info")
    }
    
    const handelOnChange = (event)=> {
        setText(event.target.value)
    }
    const [text,
        setText] = useState('');

    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="container" >
                <h1>{props.heading}</h1>
                <button className="btn btn-danger my-2 mx-1" onClick={handleCrClick}><i className="bi bi-trash"></i></button>
                <button className="btn btn-success my-2 mx-1" onClick={handleCopy}><i className="bi bi-clipboard"></i></button>
                <button className="btn btn-warning my-2 mx-1" onClick={handleExtraSpaces}><i className="bi bi-backspace"></i>Remove Extra Spaces</button>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase </button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLowerClick}>Convert to LowerCase </button>
        </div>
        <div className="container">
            <h2 className="my-2">Your text summary</h2>
            <p>
            {text.split(" ").length} words and {text.length} charactera
        </p>
            <p>
            {0.008 * text.split(" ").length} Minutes read
        </p>
            <h2>Preview</h2>
            <p>
            {text.length>0?text:"Enter something to Preview it here:"}
        </p>
        </div> </div>
    )
};