// LoadingModal.js
import { useState, useEffect } from "react";
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
        <div className="middle">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
        </div>
      </div>
    )
  );
};

export default Loading;
