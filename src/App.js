import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'


function App() {
    return (
        <>
        <Navbar/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below:" />
        </div>
        </>
    );
}


export default App;