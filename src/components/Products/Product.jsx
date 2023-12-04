import React, { useRef } from "react";
import "./Product.css";
import "./presponsive.css";
import productmid from "../assets/productmid.png";
import yellowheadphone from "../assets/yellowheadphone.png";
import blackheadphone from "../assets/blackheadphone.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Product() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const leftToRight = {
    left: { left: "-15rem" },
    main: { left: "0rem" },
  };

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null, // Remove the previous button
    nextArrow: null, // Remove the next button
  };

  return (
    <motion.div
      id="products"
      className="p-main"
      variants={fadeIn}
      initial={"hidden"}
      whileInView={"visible"}
      animate=""
      transition={{ duration: 1 }}
    >
      <motion.div
        className="p-container"
        variants={leftToRight}
        initial={"left"}
        whileInView={"main"}
        animate=""
        transition={{ duration: 1 }}
      >
        <div className="slider">
          <Slider ref={sliderRef} {...settings}>
            <div className="slider-content">
              <h1>
                The Market Provides <br />
                Hot<span style={{ color: "red" }}> Products</span>
              </h1>
            </div>
            <div className="slider-content">
              <h1>
                Available In <br />
                All<span style={{ color: "red" }}> Stores</span>
              </h1>
            </div>
          </Slider>
        </div>
        <div className="p-button">
          <button id="arrow-left" onClick={() => sliderRef.current.slickPrev()}>
            &#8592;
          </button>
          <button
            id="arrow-right"
            onClick={() => sliderRef.current.slickNext()}
          >
            &#8594;
          </button>
        </div>
      </motion.div>
      <div className="p-section2">
        <div className="product-section" id="product-1">
          <div
            className="p-shape"
            style={{
              background: "rgb(221, 221, 98)",
            }}
          >
            <img src={yellowheadphone} alt="" />
          </div>
          <h1>Unique Headphone</h1>
          <div className="span-input">
            <span>$20.50</span>
            <input type="button" value="Add To Cart" />
          </div>
        </div>
        {/* center produvt */}
        <div className="product-section product-secmain" id="product-2">
          <div
            className="p-shape p-shapemid"
            style={{
              background: "pink",
            }}
          >
            <img className="imgmid" src={productmid} alt="" />
          </div>
          <h1 className="productmain-header">Colored Headphones</h1>
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
