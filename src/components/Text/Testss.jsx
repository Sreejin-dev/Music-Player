import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testss = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
          <div className="buynow_bt"><a href="#">Buy Now</a></div>
        </div>
        <div>
          <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
          <div className="buynow_bt"><a href="#">Buy Now</a></div>
        </div>
        <div>
          <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
          <div className="buynow_bt"><a href="#">Buy Now</a></div>
        </div>
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => sliderRef.current.slickPrev()}>Previous</button>
        <button onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
    </div>
  );
};

export default Testss;
