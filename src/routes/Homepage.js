import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.js"
import Footer from "../components/Footer.js"

export default () => (
  <div>
    <Navigation />
    <Link to="/">This is homepage</Link>
    <Link to="/retail-home">Retail Home</Link>
    <Link to="/broadband-wireless">Broadband Wireless</Link>
    <Footer />
  </div>
);