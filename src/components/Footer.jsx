import React from "react";
import { pageLinks, socialLinks } from "../data";
import SocialLinksCompo from "./SocialLinksCompo";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, href, text }) => (
          <li key={id}>
            <a href={href} className="footer-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <SocialLinksCompo
            key={link.id}
            {...link}
            elementClass="footer-icon"
          />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Lulu Vending
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
