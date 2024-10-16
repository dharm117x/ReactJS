import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
       
      <Router>
        <Navbar page="HomePage" title="ReactJS" />
        
        <Routes>
          
          <Route path="/" element={<TextForms heading="Text box" />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
