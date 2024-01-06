import Headset from "../assets/aheadsetmain.png";
import Battery from "../assets/icon/battery.png";
import { motion } from "framer-motion";
import "./Award.css";
import "./aresponsive.css";
function Award() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const lefttoright = {
    left: { left: "-15rem" },
    main: { left: "0rem" },
  };
  const righttoleft = {
    right: { left: "70%" },
    normal: { left: "50%" },
  };
  return (
    <div className="a-main" id="award">
      {/* main container */}
      <motion.div
        className="container"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        animate=""
        transition={{ duration: 1 }} // Adjust the duration as needed
      >
        {/* left section */}
        <motion.div
          className="aleft-section"
          variants={lefttoright}
          initial="left"
          whileInView="main"
          animate=""
          transition={{ duration: 1 }}
        >
          {/* headset image adjust */}
          <span className="arestext">Features</span>
          <div className="aimage-headset">
            {/*background round shape*/}
            <div className="a-ring">
              {/*background ring shape*/}
              <img src={Headset} />
            </div>
          </div>
        </motion.div>
        {/* right section */}
        <motion.div
          className="aright-section"
          variants={righttoleft}
          initial="right"
          whileInView="normal"
          animate=""
          transition={{ duration: 1 }}
        >
          {/* Main test */}
          <h1>
            Award-Winning <br />
            True <span style={{ color: "red" }}>Wireless</span> <br />
            Headphone
          </h1>
          {/* features */}
          <div className="lists">
            <li>
              <img src="https://w7.pngwing.com/pngs/418/990/png-transparent-computer-icons-computer-software-others-trademark-logo-sound-recording-and-reproduction-thumbnail.png" />
              Voice Assistant
              <p>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Obcaecati dolorem sint <br />
                eveniet fuga veritatis debitis quod exercitationem doloribus
              </p>
            </li>
            <li>
              <img src="https://image.winudf.com/v2/image/Y29tLm51dHNoZWxsaW5ub3Zhc2lvbi5mYXN0Y2hhcmdpbmdfaWNvbl8xNTM4ODE2ODY2XzA2MQ/icon.png?fakeurl=1&h=240&type=webp" />
              Fast Charging
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Obcaecati dolorem <br /> sint eveniet fuga veritatis debitis
                quod exercitationem doloribus
              </p>
            </li>
            <li>
              <img src={Battery} />
              1500mah Battery
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Obcaecati dolorem <br /> sint eveniet fuga veritatis debitis
                quod exercitationem doloribus
              </p>
            </li>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Award;
