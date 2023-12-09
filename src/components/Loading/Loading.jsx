// LoadingModal.js
import React, { useState, useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay (replace with your actual data fetching logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShow(false);
    };

    fetchData();
  }, []);

  return (
    show && (
      <div className="container-load">
        <div class="middle">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
          <div class="bar bar4"></div>
          <div class="bar bar5"></div>
          <div class="bar bar6"></div>
          <div class="bar bar7"></div>
          <div class="bar bar8"></div>
        </div>
      </div>
    )
  );
};

export default Loading;
