import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
//import components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
// import Wishlist from "./components/wishlist/Wishlist";
import Wishlist from "./components/wishList/Wishlist";
import Contact from "./components/Contact";
import About from "./components/About";
import ProducDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories />
              <Products />
              <Featured />
            </>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="productdetails" element={<ProducDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
