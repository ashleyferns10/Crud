import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Crud from "./components/Crud";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import EditUser from "./components/EditUser";
import React from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Crud />}/>
          <Route path="/add" element={<AddUser />}/>
          <Route path="/all" element={<AllUsers />}/>
          <Route path="/edit/:id" element={<EditUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
