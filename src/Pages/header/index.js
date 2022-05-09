import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpensr <FontAwesomeIcon icon={faCreditCard} className="cc-i" />
        </div>

        <div className="header-button">
          <a href="https://github.com/jaydeep2311" target="_blank">
            <i class="devicon-github-original"></i>star
          </a>
        </div>
      </div>
    </div>
  );
};

export default header;
