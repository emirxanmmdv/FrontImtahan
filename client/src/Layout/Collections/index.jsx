import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const Collections = () => {
  return (
    <>
      <section id="Collections">
        <div className="container">
          <div className="collectionCards">
            <div className="collectionCard">
              <div className="collectionCardImage">
                <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" />
              </div>
              <div className="collectionCardText">
                <div className="collectionDesc">
                  <p>collections</p>
                </div>
                <div className="collectionCategory">
                  <p>Women</p>
                </div>
              </div>
            </div>
            <div className="collectionCard">
              <div className="collectionCardImage">
                <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" />
              </div>
              <div className="collectionCardText">
                <div className="collectionDesc">
                  <p>collections</p>
                </div>
                <div className="collectionCategory">
                  <p>Children</p>
                </div>
              </div>
            </div>
            <div className="collectionCard">
              <div className="collectionCardImage">
                <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" />
              </div>
              <div className="collectionCardText">
                <div className="collectionDesc">
                  <p>collections</p>
                </div>
                <div className="collectionCategory">
                  <p>Men</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Collections</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  );
};

export default Collections;
