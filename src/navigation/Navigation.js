import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/just-for-dream" element={<Home />} />
          <Route
            path="*"
            element={<Navigate replace to="/just-for-dream" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
