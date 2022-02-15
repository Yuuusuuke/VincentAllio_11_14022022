import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/header";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
