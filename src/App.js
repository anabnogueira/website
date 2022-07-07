import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Nav from "./Nav";
import Info from "./info/Info";
import Crafts from "./crafts/Crafts";
import Projects from "./projects/Projects";
import "./style.css";

import logo from "./icon.jpg";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <div id="header">
            <div id="logo">
              <Link to="/">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <Nav />
          </div>
        </header>
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/crafts/*" element={<Crafts />} />
          <Route path="/" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
