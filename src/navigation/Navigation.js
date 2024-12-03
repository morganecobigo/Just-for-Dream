import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";

function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/just-for-dream" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/just-for-dream" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
