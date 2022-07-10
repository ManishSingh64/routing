import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { NavLink, useParams } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/data`).then((r) => {
      console.log(r);
      setData(r.data);
    }).catch((err) =>{
      console.log('RUN JSON SERVER MAN')
    });
  }, []);
  return (
    <div>
      <div>Products</div>
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.id}>
            <h1>Name: {item.name}</h1>
            <h2>RS. {item.price}</h2>
            <h3>id: {item.id}</h3>
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid grey",
              }}
              to={`/products/${item.id}`}
            >
              More details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
