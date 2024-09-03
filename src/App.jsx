import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import Rout from "./page/Rout";
import Book from "./page/Book";
import Booking from "./page/Booking";

const App = () => {
  return (
    <div className="h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rout" element={<Rout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/booking" element={<Booking/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
