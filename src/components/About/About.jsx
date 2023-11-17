import React from "react";
import "./About.css";
import "./abresponsive.css"
import { motion } from "framer-motion";
function About() {
  const transition = { type: "spring", duration: 3 };
  const bottomtotop = {
    top: { top: "20rem" },
    normal: { top: "10rem" },
  };
  return (
    <motion.div
    id="about"
      className="about-main"
      style={{
        textAlign: "center",
        height: "40vh", // Adjust this based on your design
        position: "relative",
        top: "10rem",
        background: "white",
        margin: "0%", // Adjust margin for responsiveness
        paddingBottom: "3rem",
      }}
      variants={bottomtotop}
      initial={"top"}
      whileInView={"normal"}
      animate=""
      transition={{ duration: 1 }}
    >
      <div
        className="about-section"
        style={{
          borderBottom: "1px solid black",
          margin: "5rem",
          paddingBottom: "3rem",
        }}
      >
        {" "}
        <h1 style={{ position: "relative", top: "3rem", right: "49rem" }}>
          Epic-Sound
        </h1>
        {/* a-tag using for adjustment also home an features button used classnames */}
        <div className="a-tag ab-tag" style={{ fontSize: "1.2rem" }}>
          <a className="nav-link-home" href="#home">
            Home
          </a>
          <a className="nav-link-features" href="#award">
            Features
          </a>
         
          <a href="#products">Product</a>
          <a href="#about">About Us</a>
          <div className="social">
            {" "}
            <a href="#" class="fa fa-pinterest"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
          </div>
        </div>
      </div>
      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        @copyright2023epic-sound
      </span>
    </motion.div>
  );
}

export default About;
