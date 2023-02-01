import React from "react";
import "./index.css";

import Navbar from "./Components/Navbar";
import Masthead from "./Components/Masthead";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);
});

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
