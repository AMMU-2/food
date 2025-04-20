import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authslice";
import { clearCart, loadCartFromStorage } from "../redux/cartSlice";
import Cart from "./Cart";

function Header() {
  const [showCart, setShowCart] = useState(false); // Toggle cart modal
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const totalCartQuantity = useSelector((state) => state.cart.cartUserCount);

  // Load cart from localStorage when header mounts
  useEffect(() => {
    dispatch(loadCartFromStorage());
    const syncCart = () => dispatch(loadCartFromStorage());
    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, [dispatch]);

  // Logout clears user session and cart
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <span className="brand-logo">FOOD STORE</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/recipes">Menu</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Menu">Recipes</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          {isLoggedIn && <li className="nav-item"><Link className="nav-link" to="/my-account">My Account</Link></li>}
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>

          {/* 🛒 Cart icon with quantity */}
          <li className="nav-item d-flex align-items-center mx-2">
            <Link className="nav-link" onClick={() => setShowCart(true)}>
              <FaShoppingCart size={18} /> Cart ({totalCartQuantity || 0})
            </Link>
          </li>

          {/* 🔐 Auth buttons */}
          {isLoggedIn ? (
            <li className="nav-item"><Link className="nav-link" to="/" onClick={handleLogOut}>Logout</Link></li>
          ) : (
            <>
              <li className="nav-item"><Link className="btn btn-outline-light btn-sm mx-2" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="btn btn-outline-light btn-sm" to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* 🧺 Cart Modal */}
      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </nav>
  );
}

export default Header;
