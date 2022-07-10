import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const Users = () => {
  const [data, setData] = useState([]);
  //   const { state } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get('page') || 1);

  useEffect(() => {
    setSearchParams({
      page,
    });
    axios.get(`https://reqres.in/api/users?page=${page}`).then((r) => {
      console.log(r);
      setData(r.data.data);
    });
  }, [page]);

  return (
    <div>
      Users
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
      {data.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="" />
          <h1>
            {user.first_name} {user.last_name}
          </h1>
        </div>
      ))}
    </div>
  );
};
