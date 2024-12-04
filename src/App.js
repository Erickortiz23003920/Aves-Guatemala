import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Inicio from './components/Inicio';
import AvesGuatemala from './components/avesGuatemala';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/aves-guatemala" element={<AvesGuatemala/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
