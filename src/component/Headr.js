import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from "./Home";
import Add from "./Add";
import "../headr.css";

function Headr() {

  return (
    <div className="header">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </div>
  )


};

export default Headr;
