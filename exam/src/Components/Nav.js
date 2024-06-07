import React from 'react';
import res from '../assets/restaurant_24px.svg';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Nav = () => {
  // Assuming the cart is a top-level slice in the Redux state
  const cart = useSelector((state) => state.cart);

  return (
    <div className='w-full h-12 flex gap-2 bg-blue-800 justify-between'>
      <div className='flex mt-2 gap-2'>
        <Link to="/">
          <img src={res} className='m-auto' alt="Restaurant Logo" />
        </Link>
        <p className="text-center text-white">Food's Restaurant</p>
      </div>

      <Link to="/cart">
        <div className="relative">
          <CiShoppingCart className="text-2xl mt-2 mr-2" />
          {cart.length > 0 && (
            <span className="absolute -top-0 right-2 bg-green-600 text-xs w-3 h-3 flex justify-center items-center animate-bounce rounded-full text-white">
              {cart.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Nav;
