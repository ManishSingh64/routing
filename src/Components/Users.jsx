import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export const Users = () => {
  const [data, setData] = useState([]);
//   const { state } = useContext(AuthContext);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((r) => {
      console.log(r)
      setData(r.data.data);
    });
  }, []);

  return (
    <div>
      Users
      {data.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="" />
          <h1>{user.first_name} {user.last_name}</h1>
        </div>
      ))}
    </div>
  );
};
