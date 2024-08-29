import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-5 flex flex-row justify-between" aria-label="Main Navigation">
      <h1 className="logo font-bold text-[2.5vw] text-red-500">Nike</h1>
      <ul className="flex flex-row">
        <li className="mx-10 hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-10 hover:text-red-500">
          <Link to="/products">Shop</Link>
        </li>
        <li className="mx-10 hover:text-red-500">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-10 hover:text-red-500">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;