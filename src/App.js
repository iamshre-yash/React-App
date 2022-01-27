import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js'
/*
import About from './components/About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    
    const showAlert = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{
            setAlert(null)
        }, 1500);
    }
    const toggelMode =()=>{
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode has been enabled", "success")
        }else{
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success")
        }
    }
    return (
        <>
        <Navbar mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below:"  mode={mode}/>
        {/*<About />*/}
        </div>
        </>
    );
}


export default App;
