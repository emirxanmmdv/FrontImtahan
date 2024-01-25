import React from "react";
import "./index.scss";

const BigSale = () => {
  return (
    <section id="BigSale">
      <div className="container">
        <div className="bigSaleTitle">
          <h4>Big Sale!</h4>
        </div>
        <div className="bigSaleContents">
          <div className="imagePart">
            <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" />
          </div>
          <div className="textPart">
            <div className="textBox">
              <div className="discount">
                <p>50% less in all items</p>
              </div>
              <div className="credit">
                <span>
                  By <span>Carl Smith </span> • September 3, 2018
                </span>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </div>
              <div className="bigSaleButton">
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigSale;
