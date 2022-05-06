import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Policy from "./Component/Policy";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Error from "./Component/Error";
import List from "./Component/List";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer";
const App= ()=>{
return(
  <>
  <List/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>  
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route element={<Error />}/>
      </Routes>
    <Footer/>
  </>
);

}

export default App;