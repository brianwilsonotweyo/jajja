import React from "react";
import { Helmet } from "react-helmet";
import Agents from "./components/Agents";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Property from "./components/Property";
import Search from "./components/Search";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Nav />
      {/* <Search /> */}
      {/* <Services/> */}
      {/* <Property/> */}
      <Agents/>
      <Footer/>
      <Helmet>
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/popper/popper.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/scrollreveal/scrollreveal.min.js"></script>
        <script src="contactform/contactform.js"></script>
        <script src="js/main.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
