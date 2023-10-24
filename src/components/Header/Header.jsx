import React, { useState } from "react";
import Heart from "../assets/heart.png";
import Cart from "../assets/cart.png";
import Headset from "../assets/headphone.png";
import mainhead from "../assets/mainhead.png";
import demo1 from "../assets/demo1.webp";
import demo2 from "../assets/demo2.webp";
import "./Header.css";
import "./responsive.css"

function Header() {
  return (
    <>
      {/* nav bar */}
      <nav>
        <h1>Epic-Sound</h1>
        {/* a-tag using for adjustment also home an features button used classnames */}
        <div className="a-tag">
          <a className="nav-link-home" href="#">
            Home
          </a>

          {/* drop down in features */}
          <div className="dropdown-main">
            <a className="nav-link-features" href="#">
              Features ▼
            </a>
            {/* drop down items */}
            <div className="dropdown-item">
              <span>test</span>
              <span>test</span>
              <span>test</span>
              <span>test</span>
            </div>
          </div>
        </div>
        <a href="#">About Us</a>
        <a href="#">Product</a>
        {/* input field with search image */}
        <div className="search-field">
          <input placeholder="Search" type="text" />
        </div>
        {/* heart image an cart button */}
        <div>
          <div className="heart">
            <a href="#">
              <li>
                <img className="heart-img" src={Heart} />
              </li>
              <li>
                <img src={Cart} />
              </li>
            </a>
          </div>
        </div>
      </nav>
      {/* main field (after nav) */}
      <main>
        <div className="content">
          {/* left section */}
          <div className="left-section">
            <h1>Unveiling </h1>
            <span>Headphone</span>
            <h1 className="left-wonder">Wonders</h1>
            <p>
              Epix-Sound Presents A Meticulously Curated Collection <br /> of
              Headphones That Redefine Your Audio Experience. <br />
              Immerse Yourself in Rich.
            </p>

            <div className="Explore-button">
              <input type="button" value="Explore More" />
            </div>
            {/* small image -main */}
            <div className="image-head">
              <img className="headset-img" src={Headset} />
            </div>
            <div>
              <span className="off-text">30% off</span>
            </div>
            {/* demo section */}
            <div className="demo">
              <img src={demo1} alt="" />
              {/* demo image background decoration */}
              <div className="demo-bgbox"></div>
              <span>Demo</span>
              <img src={demo2} alt="" />
            </div>
          </div>

          {/* right section */}
          <div className="right-section">
            {/* main headset image */}
            <main className="mainhad-shape">
              {" "}
              <img src={mainhead} />
            </main>
            <div className="shape"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Header;
