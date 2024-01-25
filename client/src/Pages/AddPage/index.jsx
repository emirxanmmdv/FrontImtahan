import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.scss";

const AddPage = () => {
  const [product, setProduct] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("")

  const getProduct = async () => {
    const response = await axios.get("http://localhost:4000/products");
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const postProduct = async (values) => {
    const response = await axios.post("http://localhost:4000/products", values);
    getProduct();
  };

  const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:4000/products/${id}`);
    getProduct();
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div id="AddPage">
      <div className="formik">
        <Formik
          initialValues={{ image: "", name: "", info: "", price: "" }}
          validationSchema={Yup.object({
            image: Yup.string().required("*Boş saxlamaq olmaz!"),
            name: Yup.string().required("*Boş saxlamaq olmaz!"),
            info: Yup.string().required("*Boş saxlamaq olmaz!"),
            price: Yup.number()
              .positive("price must be higher than 0!")
              .required("*Boş saxlamaq olmaz!"),
          })}
          onSubmit={(values, { resetForm }) => {
            postProduct(values);
            resetForm({ values: "" });
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="image">Image URL : </label>
              <input
                className="formInput"
                id="image"
                type="text"
                {...formik.getFieldProps("image")}
              />
              {formik.touched.image && formik.errors.image ? (
                <div>{formik.errors.image}</div>
              ) : null}

              <label htmlFor="name">Name : </label>
              <input id="name" type="text" {...formik.getFieldProps("name")} />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}

              <label htmlFor="">Description : </label>
              <input id="info" type="text" {...formik.getFieldProps("info")} />
              {formik.touched.info && formik.errors.info ? (
                <div>{formik.errors.info}</div>
              ) : null}

              <label htmlFor="price">Price : </label>
              <input
                id="price"
                type="text"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
      <div className="productsTable">
        <div className="searchBar">
          <input type="text" onChange={(e)=>handleSearch(e)} placeholder="Search here..." />
        </div>
        <div className="sortByPrice">
            <div className="title">
                Sort by Price:  
            </div>
            <button onClick={()=>setSort({ x: "price" , asc: true})}>Less to More</button>
            <button onClick={()=>setSort({ x: "price" , asc: false})}>More to Less</button>
            <button onClick={()=>setSort("")}>Default</button>
        </div>
        <div className="sortByName">
            <div className="sortByName">
                Sort by Name:
            </div>
            <button onClick={()=>setSort({ x: "name" , asc: true})}>A-Z</button>
            <button onClick={()=>setSort({ x: "name" , asc: false})}>Z-A</button>
            <button onClick={()=>setSort("")}>Default</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Image</th>
              <th>Name</th>
              <th>Info</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product
              ? product
                  .filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .sort((a,b)=>{
                    if (sort && sort.asc === true) {
                        return a[sort.x] > b[sort.x]
                        ? 1
                        : a[sort.x] < b[sort.x]
                        ? -1
                        : null
                    }
                    else if (sort && sort.asc === false) {
                        return a[sort.x] < b[sort.x]
                        ? 1
                        : a[sort.x] > b[sort.x]
                        ? -1
                        : null
                        
                    }
                  })

                  .map((item, i) => (
                    <tr className="product" key={item._id}>
                      <td>{i + 1}</td>
                      <td className="productImg">
                        <img src={item.image} />
                      </td>
                      <td className="productName">
                        <h1>{item.name}</h1>
                      </td>
                      <td className="productInfo">
                        <p>{item.info}</p>
                      </td>
                      <td className="productPrice">
                        <p>{item.price}</p>
                      </td>
                      <td className="deleteBtn">
                        <button onClick={() => deleteProduct(item._id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  ))
              : []}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPage;
