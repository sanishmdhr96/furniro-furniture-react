import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../../styles/common.scss";

import { Branding } from "../../assets";

function SubHeroSection({ module }) {
  return (
    <div className="seconday-hero-section">
      {/* webp */}
      <div className="text-container">
        <img src={Branding.Logo} alt="logo" />
        <h1>{module}</h1>
        <ul className="breadcrumbs">
          <li>
            <a href="/">Home</a>
          </li>
          <MdKeyboardArrowRight />

          <li>{module}</li>
        </ul>
      </div>
    </div>
  );
}

export default SubHeroSection;
