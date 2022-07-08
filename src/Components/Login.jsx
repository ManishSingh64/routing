import axios from "axios";
import React, { useState } from "react";

export const Login = () => {
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
    console.log(form)
    axios
      .post("https://reqres.in/api/login", form)
      .then((r) => {
        console.log(r);
      });
  }

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
