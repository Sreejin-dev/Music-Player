import React, { useState } from "react";
import Heart from "../assets/heart.png";
import Cart from "../assets/cart.png";
import Headset from "../assets/headphone.png";
import mainhead from "../assets/mainhead.png";
import demo1 from "../assets/demo1.webp";
import demo2 from "../assets/demo2.webp";
import { motion } from "framer-motion";
import "./Header.css";
import "./responsive.css";

function Header() {
  const transition = { type: "spring", duration: 3 };
  const lefttoright = {
    left: { left: "-15rem" },
    main: { left: "0rem" },
  };
  return (
    <div className="h-main">
      {/* nav bar */}
      <motion.div
        className="nav-main"
        initial={{ top: "-3rem" }}
        whileInView={{ top: "0rem" }}
        transition={transition}
      >
        <h1>Epic-Sound</h1>
        {/* a-tag using for adjustment also home an features button used classnames */}
        <div className="a-tag">
          <a className="nav-link-home" href="#">
            Home
          </a>

          {/* drop down in features */}
          <a className="nav-link-features" href="#">
            Features
          </a>
          {/* drop down items */}

          <a href="#">About Us</a>
          <a href="#award">Product</a>
        </div>
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
                <img className="cart-image" src={Cart} />
              </li>
            </a>
          </div>
        </div>
      </motion.div>
      {/* main field (after nav) */}
      <main>
        <div className="content">
          {/* left section */}
          <div className="left-section">
            <h1>Unveiling</h1>
            <span>Headphone</span>
            <h1 className="left-wonder">Wonders</h1>
            <p>
              Epix-Sound Presents A Meticulously Curated Collection <br /> of
              Headphones That Redefine Your Audio Experience. <br />
              Immerse Yourself in Rich.
            </p>

            <motion.div
              className="Explore-button"
              variants={lefttoright}
              initial="left"
              whileInView="main"
              animate=""
              transition={{ duration: 1 }}
            >
              <input type="button" value="Explore More" />
            </motion.div>
            {/* small image -main */}
            <motion.div
              className="image-head"
              initial={{ bottom: "17rem" }}
              whileInView={{ bottom: "20rem" }}
              transition={transition}
            >
              <img className="headset-img" src={Headset} />
            </motion.div>
            <div>
              <span className="off-text">30% off</span>
            </div>
            {/* demo section */}
            <motion.div
              className="demo"
              variants={lefttoright}
              initial="left"
              whileInView="main"
              animate=""
              transition={{ duration: 1 }}
            >
              <img src={demo1} alt="" />
              {/* demo image background decoration */}
              <div className="demo-bgbox"></div>
              <span>Demo</span>
              <img src={demo2} alt="" />
            </motion.div>
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
    </div>
  );
}

export default Header;
