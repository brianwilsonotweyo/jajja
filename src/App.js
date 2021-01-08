import React from "react";
import { Helmet } from "react-helmet";
import Agents from "./components/Agents";
import Carousel from "./components/Carousel";
import Foot from "./components/Foot";
import Footer from "./components/Footer";
import Jajja from "./components/Jajja";
import Pay from "./components/Pay";
import Search from "./components/Search";
import Services from "./components/Services";
import Testimon from "./components/Testimon";

function App() {
  return (
    <div>
      <Search />
      <Carousel/>
      <Jajja/>
      <Services/>
      <Agents/>
      <Testimon/>
      <Pay/>
      <Footer/>
      <Foot/>
      <Helmet>
      <script src="lib/jquery/jquery.min.js"></script>
    <script src="lib/jquery/jquery-migrate.min.js"></script>
    <script src="lib/popper/popper.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/scrollreveal/scrollreveal.min.js"></script>
    <script src="js/main.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
