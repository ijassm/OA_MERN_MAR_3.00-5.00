import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export function Home() {
  return (
    <main className="container">
      <h1>Hi Welcome to Home Page</h1>
      <Link to="/register">Logout</Link>
    </main>
  );
}
