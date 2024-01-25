import React from "react";
import "./index.scss";
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const SiteInfo = () => {
  return (
    <>
      <section id="SiteInfo">
        <div className="container">
          <div className="infoCards">
            <div className="infoCard">
              <div className="cardContents">
                <div className="cardIcon">
                  <FaTruck />
                </div>
                <div className="cardText">
                  <h4 className="cardTitle">Free Shipping</h4>
                  <div className="cardDesc">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Phasellus at iaculis quam. <br /> Integer accumsan
                    tincidunt fringilla.
                  </div>
                </div>
              </div>
            </div>
            <div className="infoCard">
              <div className="cardContents">
                <div className="cardIcon">
                  <IoReload />
                </div>
                <div className="cardText">
                  <h4 className="cardTitle">Free Returns</h4>
                  <div className="cardDesc">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Phasellus at iaculis quam. <br /> Integer accumsan
                    tincidunt fringilla.
                  </div>
                </div>
              </div>
            </div>
            <div className="infoCard">
              <div className="cardContents">
                <div className="cardIcon">
                  <FaCircleQuestion />
                </div>
                <div className="cardText">
                  <h4 className="cardTitle">Customer Support</h4>
                  <div className="cardDesc">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Phasellus at iaculis quam. <br /> Integer accumsan
                    tincidunt fringilla.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
    <meta charSet="utf-8" />
    <title>Site Info</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
      
    </>
  );
};

export default SiteInfo;
