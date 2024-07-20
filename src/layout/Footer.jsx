import React from "react";

import "../styles/layout/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-upper">
        <div className="footer-item">
          <h5>Funiro.</h5>
          <p className="address">
            400 University Drive Suite 200 Coral <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-item">
          <span className="footer-muted-title">Links</span>

          <nav className="footer-navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-item">
          <span className="footer-muted-title">Help</span>

          <nav className="footer-navigation">
            <ul>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-item"></div>
      </div>
      <hr />
      <div className="footer-lower">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;
