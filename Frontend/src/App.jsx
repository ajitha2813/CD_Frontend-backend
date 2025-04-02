

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Signup from './Component/Signup.jsx';
import Dashboard from "./Component/Dashboard.jsx";
import Table from "./Component/Table.jsx";


function App(navigateTo) {
  
  return (
   <Router>
    <Routes>
    
      <Route path ="/Signup" element={<Signup/>}/>
      <Route path ="/dashboard" element={< Dashboard/>}/>
      
      <Route path ="/userTable" element={< Table/>}/>
    </Routes>
   </Router>
  )
}

export default App
