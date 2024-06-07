import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../Components/Cartitem";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleCheckout = () => {
    navigate("/final");
  };

  return (
    <div className="container mx-auto p-5">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="w-full md:w-3/5 p-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-full md:w-2/5 p-5 bg-gray-100 rounded-lg">
            <div className="mb-5">
              <h2 className="font-semibold text-2xl mb-3">Summary</h2>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Total Items:</span> {cart.length}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">Total Amount:</span> ${totalAmount}
              </p>
            </div>

            <button
              className="bg-green-600 text-white rounded-lg p-3 w-full font-bold mb-5"
              onClick={handleCheckout}
            >
              Save and Checkout
            </button>
            <Link to="/" className="bg-gray-600 text-white rounded-lg p-3 w-full text-center font-bold">
              Cancel
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <button
            className="bg-green-600 hover:bg-green-700 rounded-lg text-white transition duration-300 ease-linear p-3 px-10 mt-5"
            onClick={handleCheckout}
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
