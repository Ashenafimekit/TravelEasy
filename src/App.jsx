import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import Rout from "./page/Rout";
import Book from "./page/Book";
import Booking from "./page/Booking";
import Login from "./component/Login";
import Signup from "./component/Signup";
import BookTable from "./component/BookTable";
import AdminPage from "./page/AdminPage";
import AdminAddBus from "./component/AdminAddBus";
import AdminDeletBus from "./component/AdminDeletBus";
import AdminAllBooking from "./component/AdminAllBooking";
import AdminAllUser from "./component/AdminAllUser";
import StatsTab from "./component/StatsTab";

const App = () => {
  return (
    <div className="h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rout" element={<Rout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<StatsTab />} />
            <Route path="addbus" element={<AdminAddBus />} />
            <Route path="deletebus" element={<AdminDeletBus />} />
            <Route path="allbooking" element={<AdminAllBooking />} />
            <Route path="alluser" element={<AdminAllUser />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
