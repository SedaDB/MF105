import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import CartComp from "../../components/cart/CartComp";
import Lottie from "lottie-react";
import emptyAnimationJSON from "../../assets/animations/empty.json";
import { useCart } from "../../store/context/cartContext";

const Cart = () => {

  const navigate = useNavigate();
  const { carts, totalAmount } = useCart((state) => state);

  return (
    <div className="container mx-auto px-4 py-8">
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, index) => (
            <CartComp key={index} cart={cart} />
          ))}
          <div
            className={
              "mt-4 flex items-center justify-end text-3xl font-semibold"
            }
          >
            Total Price: <span> {totalAmount}₺</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Lottie animationData={emptyAnimationJSON} loop={true} />
          <span className="text-xl mt-4">Cart is empty</span>
          <button
            className={
              "mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            }
            onClick={() => navigate("/")} // Navigate to products page
          >
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
