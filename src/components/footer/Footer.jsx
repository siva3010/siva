import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" style={{textAlign:"center"}}>Sivaprakash G</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          
          <li>
            <a href="#" className="footer__link">
             Verification
            </a>
          </li>
        </ul>
        <span className="footer__copy">
            &#169; Sivaprakash. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
