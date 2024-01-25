import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const FeaturedProducts = () => {
  const [product, setProduct] = useState("");

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/products");
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="FeaturedProducts">
      <div className="container">
        <div className="FeaturedProductsTitle">
          <h3>Featured Products</h3>
        </div>
        <div className="products">
          {product &&
            product.map((item) => (
              <div className="product" key={item._id}>
                <div className="card">
                  <div className="cardImg">
                    <img src={item.image} />
                  </div>
                  <div className="cardText">
                    <div className="cardTitle">
                      <p>{item.name}</p>
                    </div>
                    <div className="cardInfo">
                      <p>{item.info}</p>
                    </div>
                    <div className="cardPrice">${item.price}</div>
                    <div className="seeDetails">
                      <Link to={`/details/id`}>
                        <FaEye />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
