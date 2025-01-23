import React from "react";
import { useCart } from "../../store/context/cartContext";

interface CartItem {
  id: number | string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const CartComp: React.FC<{ cart: CartItem }> = React.memo(({ cart }) => {

  const { removeFromCart } = useCart((state) => state);
  return (
    <div className="my-16 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={cart?.image}
        alt=""
      />

      <div className="w-[450px]">
        <div className="font-semibold text-lg">
          <span>{cart?.quantity} - </span>
          {cart?.title}
        </div>
      </div>

      <div
        onClick={() => removeFromCart(cart?.id)}
        className="bg-red-500 text-white text-xl cursor-pointer rounded-md w-[150px] h-10 flex items-center justify-center"
      >
        Clear Product
      </div>
    </div>
  );
});

export default CartComp;
