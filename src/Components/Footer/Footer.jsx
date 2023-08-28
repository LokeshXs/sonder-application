import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import styles from "./footer.module.css";
import React from "react";
const Footer = () => {




  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <div className={styles['footer-companyLinks']}>
            <h3>COMPANY</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Business and Groups</a></li>
              <li><a href="">Real Estate</a></li>
              <li><a href="">Corporate Responsibility</a></li>
              <li><a href="">Investor Relations</a></li>
              <li><a href="">Modern Slavery Act</a></li>
              <li><a href="">Biometric Policy</a></li>
            </ul>
          </div>
          <div className={styles['footer-supportLinks']}>
            <h3>SUPPORT</h3>
            <ul>
              <li><a href="">Help Center</a></li>
            </ul>
          </div>
          <div className={styles['footer-socialLinks']}>
            <h3>SOCIAL</h3>
            <ul>
              <li><a href=""><Facebook fontSize="large" /></a></li>
              <li><a href=""><Instagram fontSize="large" /></a></li>
              <li><a href=""><Twitter fontSize="large" /></a></li>
            </ul>
          </div>
          <div className={styles['footer-languageLinks']}>

            <div>
              <label htmlFor="language">LANGUAGE</label>
              <select name="language" id="language" >
                <option value="volvo">English (US)</option>
                <option value="saab">English (CA)</option>
                <option value="opel">Francais (FR)</option>
                <option value="audi">Espanol (ES)</option>
              </select>
            </div>
            <div>
              <label htmlFor="language">CURRENCY</label>
              <select name="language" id="language" >
                <option value="volvo">USD ($)</option>
                <option value="saab">CAD ($)</option>
              </select>
            </div>




          </div>
        </div>

        <div className={styles.policyContainer}>
          <p>Ⓒ 2023 Sonder Holdings Inc. All rights reserved.</p>
          <ul>
            <li><a href="">+1 617-300-0956</a></li>
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>

      </div>



    </footer>
  )
};

export default Footer;