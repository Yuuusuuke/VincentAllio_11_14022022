import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Location from "./components/Location/location";
import './App.scss';
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <>
    <div className="App container-lg">
      <Router>
        <Header />

        <DataProvider>
          <Routes>
            <Route path='/location/:id' element={<Location />} />
            <Route path='/about' element={<About />} />
            <Route path="/VincentAllio_11_14022022/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DataProvider>
      </Router>
      
    </div>
    <Footer />
    </>
  );
}

export default App;
