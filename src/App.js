import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About.js'


function App() {
    const [mode, setMode] = useState('light');
    const toggelMode =()=>{
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'grey';
        }else{
            setMode('light')
            document.body.style.backgroundColor = 'white';
        }
    }
    return (
        <>
        <Navbar mode={mode} toggelMode={toggelMode} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below:"  mode={mode}/>
        </div>
        <About/>
        </>
    );
}


export default App;