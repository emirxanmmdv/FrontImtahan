import React from "react";
import "./index.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="footerContents">
          <div className="topFooter">
            <div className="leftFooter">
              <div className="navigations">
                <h5 className="title">Navigations</h5>
                <ul>
                  <li>Sell Online</li>
                  <li>Mobile commerce</li>
                  <li>Point of sale</li>
                  <li>Features</li>
                  <li>Dropshipping</li>
                  <li>Hardware</li>
                  <li>Shopping Cart</li>
                  <li>Website development</li>
                  <li>Software</li>
                  <li>Store Builder</li>
                </ul>
              </div>
            </div>
            <div className="midFooter">
              <div className="promo">
                <div className="promoTitle">Promo</div>
                <div className="promoImg">
                  <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" />
                </div>
                <div className="promoDesc">
                  <p>Finding Your Perfect Shoes</p>
                </div>
                <div className="expireData">Promo from nuary 15 — 25, 2019</div>
              </div>
            </div>
            <div className="rightFooter">
              <div className="contactInfo">
                <div className="title">Contact Info</div>
                <div className="infoCards">
                  <div className="infoCard">
                    <div className="cardImg">
                      <FaLocationDot />
                    </div>
                    <div className="cardName">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </div>
                  </div>
                  <div className="infoCard">
                    <div className="cardImg">
                      <FaPhoneAlt />
                    </div>
                    <div className="cardName">+2 392 3929 210</div>
                  </div>
                  <div className="infoCard">
                    <div className="cardImg">
                      <IoIosMail/>
                    </div>
                    <div className="cardName">emailaddress@domain.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomFooter"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
