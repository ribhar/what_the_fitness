import React, { useState } from "react";
import styles from "./Footer.module.css";
import LOGO from "../assets/logo.PNG";
import IN from "../assets/insta_icon_1.PNG";
import IN2 from "../assets/insta_icon_2.png";
import FB from "../assets/fb_icon_1.png";
import FB2 from "../assets/fb_icon_2.png";
import LI from "../assets/li_icon_1.png";
import LI2 from "../assets/li_icon_2.png";
import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

const Footer = () => {
  const [isShown, setIsShown] = useState({
    instagram: false,
    facebook: false,
    linkedin: false,
  });
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.branding}>
            <img src={LOGO} alt="Logo" />
            <div className={styles.soicons}>
              <div>
                <img
                  onMouseEnter={() =>
                    setIsShown({
                      instagram: true,
                      facebook: false,
                      linkedin: false,
                    })
                  }
                  onMouseLeave={() =>
                    setIsShown({
                      instagram: false,
                      facebook: false,
                      linkedin: false,
                    })
                  }
                  src={isShown.instagram ? IN2 : IN}
                  alt="Instagram"
                />
              </div>
              <div>
                <img
                  onMouseEnter={() =>
                    setIsShown({
                      instagram: false,
                      facebook: true,
                      linkedin: false,
                    })
                  }
                  onMouseLeave={() =>
                    setIsShown({
                      instagram: false,
                      facebook: false,
                      linkedin: false,
                    })
                  }
                  src={isShown.facebook ? FB2 : FB}
                  alt="Facebook"
                />
              </div>
              <div>
                <img
                  onMouseEnter={() =>
                    setIsShown({
                      instagram: false,
                      facebook: false,
                      linkedin: true,
                    })
                  }
                  onMouseLeave={() =>
                    setIsShown({
                      instagram: false,
                      facebook: false,
                      linkedin: false,
                    })
                  }
                  src={isShown.linkedin ? LI2 : LI}
                  alt="Linkedin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.columns}>
          <h3>Quick Links</h3>
          <h4>About</h4>
          <h4>FAQs</h4>
          <h4>Privacy Policy</h4>
          <h4>WTF in News</h4>
          <h4>Terms & Conditions</h4>
          <h4>Refund & Cancellation</h4>
        </div>
        <div className={styles.columns}>
          <h3>Explore</h3>
          <h4>Arenas</h4>
          <h4>Studios</h4>
          <h4>Nutrition</h4>
        </div>
        <div className={styles.columns}>
          <h3>Contacts</h3>
          <div>
            <div>
              <MdLocationOn size={25} />
            </div>

            <h4>
              Ro: S 1502, Amarpali Silicon city, Sector 76, Noida, Uttar
              Pradesh, India{" "}
            </h4>
          </div>
          <div>
            <div>
              <MdLocationOn size={25} />
            </div>

            <h4>
              Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India{" "}
            </h4>
          </div>
          <div>
            <div>
              <MdCall size={25} />
            </div>

            <h4>+919090639005</h4>
          </div>
          <div>
            <div>
              <MdMail size={25} />
            </div>
            <h4>support@wtfup.me</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
