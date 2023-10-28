import React from "react";
import Headset from "../assets/aheadsetmain.png";
import Battery from "../assets/icon/battery.png"
import "./Award.css";
function Award() {
  return (
    <>
      {/* main container */}
      <div className="container">
        {/* left section */}
        <div className="aleft-section">
          {/* headset image adjust */}

          <div className="aimage-headset">
            {" "}
            {/*background round shape*/}
            <div className="a-ring">
              {/*background ring shape*/}
              <img src={Headset} />
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="aright-section">
          <h1>
            Award-Winning <br />
            True <span style={{ color: "red" }}>Wireless</span> <br />
            Headphone
          </h1>
          <div className="lists">
            <li>
              <img src="https://w7.pngwing.com/pngs/418/990/png-transparent-computer-icons-computer-software-others-trademark-logo-sound-recording-and-reproduction-thumbnail.png" />
              Voice Assistant
              <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Obcaecati dolorem sint <br />eveniet fuga veritatis debitis quod exercitationem doloribus</p>
            </li>
            <li>
              <img src="https://image.winudf.com/v2/image/Y29tLm51dHNoZWxsaW5ub3Zhc2lvbi5mYXN0Y2hhcmdpbmdfaWNvbl8xNTM4ODE2ODY2XzA2MQ/icon.png?fakeurl=1&h=240&type=webp" />
              Fast Charging
              <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Obcaecati dolorem <br /> sint eveniet fuga veritatis debitis quod exercitationem doloribus</p>
            </li>
            <li>
              <img src={Battery} />
              1500mah Battery
              <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Obcaecati dolorem <br /> sint eveniet fuga veritatis debitis quod exercitationem doloribus</p>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
