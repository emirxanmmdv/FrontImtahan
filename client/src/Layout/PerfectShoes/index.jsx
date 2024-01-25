import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const PerfectShoes = () => {
  return (
    <>
      <section id="PerfectShoes">
        <div className="background">
          <div className="imagePart">
            <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" />
          </div>
          <div className="textPart">
            <div className="title">
              <h1>
                Finding Your
                <br />
                Perfect Shoes
              </h1>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Phasellus at iaculis quam. Integer accumsan
                <br />
                tincidunt fringilla
              </p>
            </div>
            <div className="shopNowBtn">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
    <meta charSet="utf-8" />
    <title>Perfect Shoes</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    </>
  );
};

export default PerfectShoes;
