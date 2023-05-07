import React from "react";

import { pageLinks, socialLinks } from "../data";
import SocialLinksCompo from "./SocialLinksCompo";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h4 className="logo">Lulu Vending</h4>
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
