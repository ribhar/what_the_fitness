import React, { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import LOGO from '../assets/logo1.png'
import MENU from '../assets/menu1.png'
import {Link} from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })


  
 

  return (
    <div id={styles.position}>
      <div className={navbar? styles.nav : styles.nav1}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div onClick={handleClick}>
              <img src={MENU} alt="Menu" />
            </div>
            <img src={LOGO} alt="Logo" />
          </div>
          <ul >
            <li>
              <Link to="/gyms" smooth={true} duration={500} className={styles.li}>
                Fitness
              </Link>
            </li>
            <li>
              <Link to="/gyms" smooth={true} duration={500} className={styles.li}>
                Nutrition
              </Link>
            </li>
            <li>
              <Link to="/gyms" smooth={true} duration={500} className={styles.li}>
                Gyms
              </Link>
            </li>
            <li>
              <Link to="/gyms" smooth={true} duration={500} className={styles.li}>
                Become WTF Partner
              </Link>
            </li>
            <li>
              <Link to="/gyms" smooth={true} duration={500} className={styles.li}>
                About Us
              </Link>
            </li>
            
          </ul>

          <div className={styles.columns}>
          
            <Link className={styles.navbtns} to="/gyms"><p>Fitness</p> </Link>
            <Link className={styles.navbtns} to="/gyms"><p>Nutrition</p> </Link>
            <Link className={styles.navbtns} to="/gyms"><p>Gyms</p> </Link>
            <Link className={styles.navbtns} to="/gyms"><p>Become WTF Partner</p></Link>
            <Link className={styles.navbtns} to="/gyms"><p>About Us</p></Link>
          </div>
          <button className={styles.loginbtn}> Login</button>
        </div>
      </div>
    </div>
    
  )
}
export default Nav
