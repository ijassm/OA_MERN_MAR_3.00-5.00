import { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const KEY = "Sunil_the_mass";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [message, setMessage] = useState();

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const decryptData = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  };

  const loginHandle = () => {
    const d = localStorage.getItem("userData");
    const decryptedData = decryptData(d);
    console.log(decryptedData);
    if (
      decryptedData.email === data.email &&
      decryptedData.password === data.password
    ) {
      setMessage("logging in 🧡 Please Wait...");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setMessage("invalid");
    }
  };
  return (
    <main className="container my-5">
      <h1 className="my-5">Login page loaded</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={onchangeHandler} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={onchangeHandler} />
      <button onClick={loginHandle}>Submit</button>
      <h1>{message}</h1>
    </main>
  );
}
