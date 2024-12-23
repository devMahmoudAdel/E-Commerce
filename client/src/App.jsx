import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
//import components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404/Error404";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
// import Wishlist from "./components/wishlist/Wishlist";
import Wishlist from "./components/wishList/Wishlist";
import Contact from "./components/Contact";
import About from "./components/About";
import ProducDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import ResetPassword from "./components/ResetPassword";
import axios from "axios";
import AdminApp from "./components/adminn/AdminApp";
import EditProfile from "./components/profile/EditProfile";
import Profile from "./components/profile/Profile";
import Cookies from "js-cookie";
import TopRatedProducts from "./components/HomePageComponents/TopRated";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  axios.defaults.baseURL = "https://e-commerce-server-peach.vercel.app/";
  // axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;
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
              <TopRatedProducts />
              <Featured />
            </>
          }
        />
        <Route path="signup" element={<SignUp settoken={setToken} />} />
        <Route path="login" element={<LogIn settoken={setToken} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="productdetails/:id" element={<ProducDetails />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;