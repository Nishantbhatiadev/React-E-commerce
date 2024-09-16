import React from 'react'
import Navbar from "./component/Navbar";
import CartPage from "./component/cartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './router/Home';
import Blogs from './router/Blogs';
import Product from './router/Product';
import Contact from './router/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App