
import './App.css';
import React from "react";
import {BrowserRouter,  Routes,  Route,  Link} from 'react-router-dom';



function App() {

 
  const Home  = () => 
    <h1>This is the homepage</h1>;
  
    const About  = () => 
    <h1>This is the about page</h1>;

    const Contact  = () => 
    <h1>This is the contact page</h1>;


  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
