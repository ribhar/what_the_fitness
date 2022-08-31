import React from 'react'
import styles from './Nav.module.css'
import LOGO from '../assets/logo.PNG'
// import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={LOGO} alt="Logo" />
        </div>
        <div className={styles.columns}>
          {/* <Link to="/">Fitness</Link>
          <Link to="/">Nutrition</Link>
          <Link to="/">Gyms</Link>
          <Link to="/">Become WTF Partner</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Login</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Nav
