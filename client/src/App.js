import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./component/home/home"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
