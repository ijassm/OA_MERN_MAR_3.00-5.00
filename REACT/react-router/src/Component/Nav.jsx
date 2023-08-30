import { Link, NavLink } from "react-router-dom";

const style = ({ isActive, isPending }) => {
  // console.log(isActive, "isActive");
  // console.log(isPending, "isPending");
  return {
    fontWeight: isActive ? "bold" : "normal",
    // color: isActive ? "red" : "white",
  };
};

export const Nav = () => {
  return (
    <nav className="container row bg-primary text-white py-4 mx-auto">
      <section className="col">Logo</section>
      <section className="col d-flex gap-4 justify-content-end">
        <NavLink className="text-white" style={style} to="login">
          Login
        </NavLink>
        <NavLink className="text-white" style={style} to="register">
          register
        </NavLink>
      </section>
    </nav>
  );
};
