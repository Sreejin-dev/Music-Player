import React, { useState } from "react";
import "./Product.css";
import productmid from "../assets/productmid.png";
import yellowheadphone from "../assets/yellowheadphone.png";
import blackheadphone from "../assets/blackheadphone.png";
import { motion } from "framer-motion";
function Product() {
  const [change, setChange] = useState("");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const lefttoright = {
    left: { left: "-15rem" },
    main: { left: "0rem" },
  };

  return (
    <motion.div
      className="p-main"
      variants={fadeIn}
      initial={"hidden"}
      whileInView={"visible"}
      animate=""
      transition={{ duration: 1 }}
    >
      {/* p-conteiner based on hwader text an buttons */}
      <motion.div
        className="p-container"
        variants={lefttoright}
        initial={"left"}
        whileInView={"main"}
        animate=""
        transition={{ duration: 1 }}
      >
        <h1>
          The Market Provides <br />
          Hot<span style={{ color: "red" }}> Products</span>
        </h1>
        {/* buttons */}
        <div className="p-button">
          <button id="arrow-left">&#8592;</button>
          <button id="arrow-right">&#8594;</button>
        </div>
      </motion.div>
      {/* products info section  */}
      <div className="p-section2">
        <div className="product-section" id="product-1">
          {/* round shape */}
          <div
            className="p-shape"
            style={{
              background: "rgb(221, 221, 98)",
            }}
          >
            {/* image */}
            <img src={yellowheadphone} alt="" />
          </div>
          {/* texts */}
          <h1>Unique Headphone</h1>
          {/* price tag */}
          <div className="span-input">
            <span>$20.50</span>
            <input type="button" value="Add To Cart" />
          </div>
        </div>
        <div className="product-section product-secmain" id="product-2">
          <div
            className="p-shape p-shapemid"
            style={{
              background: "pink",
            }}
          >
            <img
              style={{ width: "20rem" }}
              className="imgmid"
              src={productmid}
              alt=""
            />
          </div>
          <h1 className="productmain-header">Colored Headphones</h1>{" "}
          <div className="span-input span-input-center" id="product-3">
            <span>$36.50</span>
            <input type="button" value="Add To Cart" />
          </div>
        </div>
        <div className="product-section">
          <div
            className="p-shape black-img"
            style={{
              background: "gray",
            }}
          >
            <img src={blackheadphone} alt="" />
          </div>
          <h1>Modern Headphones</h1>
          <div className="span-input">
            <span>$24.00</span>
            <input type="button" value="Add To Cart" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
