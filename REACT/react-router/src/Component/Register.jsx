import { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const KEY = "Sunil_the_mass";

export const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setData({ email: "", fullname: "", password: "" });
  };

  const submitHandler = () => {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      KEY
    ).toString();
    localStorage.setItem("userData", ciphertext);
    clear();
    navigate("/login");
  };

  return (
    <main className="container my-5">
      <h1 className="my-5">Register page loaded</h1>

      <label htmlFor="email">Fullname</label>
      <input
        type="text"
        name="fullname"
        onChange={onchangeHandler}
        value={data.fullname}
        required
      />

      <br />
      <br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={onchangeHandler}
        required
      />

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={onchangeHandler}
        value={data.password}
        required
      />
      <br />
      <br />
      <button onClick={submitHandler}>Submit</button>
    </main>
  );
};
