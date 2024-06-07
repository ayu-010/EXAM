import React from 'react';
import data from '../data/data';
import { useDispatch } from "react-redux";
import { remove, add } from '../redux/slices/Cartsl';
// import Product from './Product'; 

const Card = () => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(remove(item.id));
    console.log("item removed", item);
  };

  const addToCart = (item) => {
    dispatch(add(item));
    console.log("item added", item);
  };

  return (
    <div className='w-[1200] h-full flex flex-wrap gap-4'>
      {
      data.map((item, index) => (
        <div key={index} className='border rounded-lg shadow-lg p-4 w-60 m-auto mt-10'>
          <img className='w-full h-40 object-cover rounded' src={item.image} alt={item.name} />
          <p className='mt-2 text-lg font-semibold'>{item.name}</p>
          <p className='mt-1 text-gray-600'>{item.price}</p>
          <div className='flex gap-5 mt-4'>
            <button onClick={() => addToCart(item)} className='bg-blue-700 text-white px-3 py-1 rounded'>
              +
            </button>
            <button onClick={() => removeFromCart(item)} className='bg-gray-200 text-gray-700 px-3 py-1 rounded'>
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
