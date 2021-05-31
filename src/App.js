import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Amenities from "./Amenities";
import Hotelinfo from "./Hotelinfo";
import Createroom from "./Createroom";
import Listroom from "./Listroom";
import Listcustomer from "./Listcustomer";
import Bookroom from "./Bookroom";
import Edit from "./Edit";
import Editcus from "./Editcus";
import axios from "axios";
function App() {
  return (
    <Router>
      
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light text-capitalize main-font-family">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="imgs/logo.png" alt="#" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#show-menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="show-menu">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/Createroom">
                  Create Hall 
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Listroom">
                  List Hall
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Listcustomer" href="#c">
                  List all customers
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  contacts
                </a>
              </li>
              <li class="nav-item book d-flex align-items-center">
                <Link to="/Bookroom" class="nav-link">
                  book now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home">
        <div class="small-container">
          <div class="row">
            <div class="col-lg-4 col-12 lobster-font-family d-flex align-items-center">
              <h2>
                It is a long established fact that a reader will be distracted
                by the readablen
              </h2>
            </div>
          </div>
          <div class="h-slider roboto-font-family welcome d-flex align-items-center justify-content-center">
            <h1 class="text-capitalize">
              Welcome to <br />
              <span>five hotel</span>
            </h1>
            <div id="headerslider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item carousel-three active"></div>
                <div class="carousel-item carousel-two"></div>
                <div class="carousel-item carousel-one"></div>
              </div>
              <a
                class="carousel-control-prev"
                href="#headerslider"
                role="button"
                data-slide="prev"
              >
                <i class="fas fa-angle-double-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#headerslider"
                role="button"
                data-slide="next"
              >
                <i class="fas fa-angle-double-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="st-rec"></div>
        <div class="rd-rec"></div>
      </header>
   <Switch>
     <Route path="/" exact={true}>
     <Hotelinfo></Hotelinfo>
      <Amenities></Amenities>
     </Route>
     <Route path="/Createroom" component={Createroom} exact={true}/>
     <Route path="/Listroom" component={Listroom} exact={true}/>
     <Route path="/Listcustomer" component={Listcustomer} exact={true}/>
     <Route path="/Edit/:id" component={Edit} exact={true}/>
     <Route path="/Editcus/:id" component={Editcus} exact={true}/>
     <Route path="/Bookroom" component={Bookroom} exact={true}/>
   </Switch>
   <Footer></Footer>
       
    </div>
    </Router>
  );
}
export default App;
