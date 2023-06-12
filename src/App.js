import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Allrouter from "./routes/Allrouter"
import ScrollToTop from "./components/wrapper/ScrollToTop"
function App() {
  return (
    <Router> 
       <ScrollToTop/>
        <Allrouter/>
       
    </Router>
    
  );
}

export default App;
