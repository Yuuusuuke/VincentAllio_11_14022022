import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import NotFound from "./components/404/404";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import './App.scss';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path="/VincentAllio_11_14022022/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
    </div>
    <Footer />
    </>
  );
}

export default App;
