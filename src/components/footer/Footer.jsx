import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" style={{textAlign:"center"}}>Pradeep S</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
             Verification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://facebook.com/pradeep.sivakumar.77"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://twitter.com/im_pradeep7"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://telegram.me/pradeep_sivakumar"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Pradeep Sivakumar. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
