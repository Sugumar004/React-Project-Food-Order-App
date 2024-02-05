
import React, { useState } from "react";
import "./App.css"
import HomePage from "./Components/HomePage/HomePage";
import BookingPage from "./Components/BookingPage/Booking";
import RecepiePage from "./Components/RecepiePage/RecepiePage";
import RecepieListPage from "./Components/RecepieList/RecepieListPage";
import OrderPage from "./Components/OrdersPage/OrderPage";
import { Routes,Route } from "react-router-dom";
import HelpPage from "./Components/HelpPage/HelpPage";
import ProfilePage from "./Components/Profile Page/ProfilePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignInPage from "./Components/SignInPage/SignInPage";


function MyApp() {

  return (
    <>
      
      <Routes>
        <Route path = '/' element={<LoginPage></LoginPage>} />
        <Route path="/Register" element={<SignInPage></SignInPage>}/>
        <Route  path='/home' element={<RecepiePage ></RecepiePage>} />
        <Route path="/dishes" element={<HomePage ></HomePage>}/>  
        <Route path="/help" element={<HelpPage></HelpPage>}/>
        <Route path="/profile" element={<ProfilePage ></ProfilePage>}/>
        <Route path="/orders" element={<OrderPage></OrderPage>}/>
        <Route path="/recepelistpage" element={<RecepieListPage></RecepieListPage>} />
        <Route path="/bookingpage" element={<BookingPage></BookingPage>}/>
      </Routes>

    </>
  );
}

export default MyApp;
