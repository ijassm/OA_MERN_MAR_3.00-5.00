import React from "react";
import { Nav } from "./Component/Nav";
import { Contactus } from "./Component/Contactus";
import { Home } from "./Component/Home";
import { Aboutus } from "./Component/Aboutus";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Component/Login";
import { Register } from "./Component/Register";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Register />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
