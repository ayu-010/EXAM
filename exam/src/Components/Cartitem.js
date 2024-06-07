import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove,add } from "../redux/slices/Cartsl";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    
  };
  const addtoCart = () => {
    dispatch(add(item));
    
  };

  return (
    <div className="flex items-center p-2 justify-between mt-2 mb-2   shadow-md ">

      <div className="flex  p-0 md:p-3 gap-5 items-center">
      
       

      
        <div className=" space-y-5 w-[70%] flex">
          <h1 className="text-xl">{item.name}</h1>

          <div className="flex items-center justify-between">
           
            <div
              className="text-blue-800 bg-red-200  p-3 cursor-pointer"
              onClick={removeFromCart}
            >
              -
            </div>
            <div
              className="text-red-800 bg-red-200  p-3 cursor-pointer"
              onClick={addtoCart}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
