import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
  
  <div className="container">

   <Navbar  page="HomePage"/>
   <Navbar  page="HomePage" title='ReactJS'/>
   <TextForms heading="Text box"/>
   </div>
    
   
  );
}

export default App;
