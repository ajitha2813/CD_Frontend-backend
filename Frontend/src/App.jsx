

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Signup from './Component/Signup.jsx';
import Dashboard from "./Component/Dashboard.jsx";
import Table from "./Component/Table.jsx";
import Privateroute from "./Component/Privateroute.jsx";


function App() {
  
  return (
   <Router>
    <Routes>
    
      <Route path ="/" element={<Signup/>}/>
      <Route element={<Privateroute/>}>
         <Route path ="/dashboard" element={< Dashboard/>}/>
      </Route>
      {/* <Route path ="/userTable" element={< Table/>}/> */}
    </Routes>
   </Router>
  )
}

export default App
