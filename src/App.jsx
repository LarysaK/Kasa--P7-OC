import React from "react";
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
  );
}
