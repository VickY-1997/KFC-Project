import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
        
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top sticky">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="https://i.ibb.co/Nxm1Twv/KFC-logo.png" alt="logo"/></a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/"><img src="https://i.ibb.co/5nVwtqF/home.gif" alt="home"/> HOME</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                ><img src="https://i.ibb.co/f84yv7D/menu.gif" alt="menu"/> MENU</a
              >
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">BEVERAGES & DESSERTS</a>
                </li>
                <li><a className="dropdown-item" href="#">BOX MEALS</a></li>
                <li><a className="dropdown-item" href="#">BRIYANI BUCKETS</a></li>
                <li><a className="dropdown-item" href="#">BURGER</a></li>
                <li><a className="dropdown-item" href="#">CHICKEN BUCKETS</a></li>
                <li><a className="dropdown-item" href="#">HOT LAUNCHES</a></li>
                <li><a className="dropdown-item" href="#">SNACKS</a></li>
                <li>
                  <a className="dropdown-item" href="#">VALUE LUNCH SPECIALS</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"
                ><img src="https://i.ibb.co/h91ndyn/location.gif" alt="location" />
                NEARBY STORES</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="https://i.ibb.co/CJxRwTc/discount.gif" alt="offer" />
                KFC-DEALS</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="https://i.ibb.co/TWkNS8q/cart.gif" alt="cart" /> CART</a
              >
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item signup">
              <a className="nav-link" href="#">
                <img
                  src="https://i.ibb.co/fN8JyKL/signup.gif"
                  alt="signup"
                  className="imgsignup"
                />SIGNUP
              </a>
            </li>

            <li className="nav-item login">
              <a className="nav-link" href="#">
                <img
                  src="https://i.ibb.co/jkQhDBf/login.gif"
                  alt="login"
                  className="imglogin"
                />LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


        </>
    )
}

export default Header;