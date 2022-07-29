import React from 'react';
import "./Navbar.css"
import Logo from "../../../assets/logo.png";
// import image from "../../../assets/block.png";
import Dropdown from './Dropdown';
import { useState } from 'react';

function Navbar() {

  const [hoverableDropdown, sethoverableDropdown] = useState(false)


  return (
    // start of navbar
    <nav className="navbar navbar-inverse navbar-expand-lg p-2 fixed-top">
      <div className="container marg">
        <a className="navbar-brand col-2" to="/"> <img src={Logo} alt="Logo" height={"55px"} /> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
          <div class="offcanvas-header">
            <img src={Logo} alt="Logo" height={"40px"} />
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="text__right offcanvas-body" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 active">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" to="#">Home</a>
              </li>

              {/* Dropdown List */}

              <li className="nav-item dropdown dropdown-mega position-static">
                <a className="nav-link" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  Services
                </a>
                <div className="dropdown-menu shadow" aria-labelledby="offcanvasNavbarDropdown">
                  <Dropdown />
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" to="#">Portfolios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Knowledgebase</a>
              </li>
              <form className="d-flex">
                <button className="btn btn-danger backEffect" type="submit">Let's Talk</button>
              </form>
            </ul>
          </div>
        </div>
      </div>

      {/* End of navbar */}


      {/*  Start of Mobile View  navbar */}
      <div className="aiz-mobile-bottom-nav d-xl-none fixed-bottom bg-white shadow-lg border-top">
        <div className="d-flex justify-content-around align-items-center">
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right,'bg-soft-primary')}}">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-home"></i>
              <p className="small">Home</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-cogs"></i>
              <p className="small">Services</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-receipt"></i>
              <p className="small">Get Quotation</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-boxes"></i>
              <p className="small">Proucts</p>
            </span>
          </a>
        </div>
      </div>

      {/* End of Mobile View Navbar */}
    </nav>
    // End of responsive Navbar
  )
}
export default Navbar;