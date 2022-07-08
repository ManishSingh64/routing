import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductsDetails = () => {
  const params = useParams();
//   console.log("params", params);

  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/data/${params.id}`).then((r) => {
      console.log(r.data);
      setItem({ ...r.data });
    });
  }, []);
  return (
    <div>
      ProductsDetails
      <div>
        <h1>{item.name}</h1>
        <h2>{item.price}</h2>
        <h3>{item.id}</h3>
      </div>
    </div>
  );
};
