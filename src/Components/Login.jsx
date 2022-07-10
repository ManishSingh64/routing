import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {

  const {login,state} = useContext(AuthContext)
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    axios.post("https://reqres.in/api/login", form).then((r) => {
      console.log(r);
      login()
      navigate('/users')
    });
  }
  if(state.isAuth) return <h1>Logged In</h1>
  return (
    <div>
      <form action="">
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="emai"
        />
        <input
          name="password"
          type="text"
          onChange={handleChange}
          placeholder="password"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
