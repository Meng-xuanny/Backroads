import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import SocialLinksCompo from "./SocialLinksCompo";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a href={href} className="nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLinksCompo key={link.id} elementClass="nav-icon" {...link} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
