import React from "react";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
  
}

export default App