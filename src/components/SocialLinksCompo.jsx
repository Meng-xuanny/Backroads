import React from "react";

const SocialLinksCompo = ({ href, icon, elementClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={elementClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLinksCompo;
