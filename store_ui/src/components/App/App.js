import './App.css';
import { BrowserRouter} from "react-router-dom"
//import { useState } from 'react';


import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
