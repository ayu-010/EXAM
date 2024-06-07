import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/Cartsl";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
  };
console.log("post inside the product is ",post);
  if (!post || !post.image || !post.name || post.price === undefined) {
    console.log("data is not coming ")
    return <div className="flex justify-center items-center">Invalid product data</div>;
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" alt={post.name} />
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.name}
        </p>
      </div>

      <div className="flex justify-between gap-12 w-full mt-5">
        <div>
          <p className="text-black font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase"
            onClick={removeFromCart}
          >
            -
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase"
            onClick={addToCart}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
