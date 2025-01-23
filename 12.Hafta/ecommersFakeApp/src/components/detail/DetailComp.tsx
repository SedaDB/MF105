import React, { useState } from 'react';
import { useCart } from '../../store/context/cartContext';

interface ProductDetail {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const DetailComp: React.FC<{ productDetail: ProductDetail }> = ({
  productDetail,
}) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart((state) => state);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    console.log("adsas",quantity)
    if (quantity > 0) { // Add this check to prevent adding items with 0 quantity
      addToCart({
        id: productDetail?.id ?? 0, // Handle potential null/undefined values
        title: productDetail?.title ?? '',
        image: productDetail?.image ?? '',
        quantity,
        price: productDetail?.price ?? 0,
      })

    }
  };

  return (
    <div className="flex gap-20 mt-36">
      <img
        className="w-[500px] h-[500px] object-contain"
        src={productDetail?.image || ''} // Handle potential null/undefined image
        alt=""
      />
      <div className="mt-2">
        <div className="text-5xl font-bold w-3/4">{productDetail?.title || ''}</div>
        <div className="mt-4 w-3/4 text-xl">{productDetail?.description || ''}</div>
        <div className="flex mt-5 gap-10  text-lg">
          <div className="bg-red-600 px-4 py-1 rounded font-semibold">
            Price : {productDetail?.price?.toFixed(2)} ₺
          </div>
          <div className="bg-gray-400 px-4 py-1 rounded font-semibold">
            Rating : {productDetail.rating?.rate?.toFixed(1)}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-4 justify-end me-6">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            className="w-8 text-center text-2xl font-semibold"
            type="text"
            value={quantity.toString()}
            readOnly
          />
          <div onClick={increment} className="text-3xl cursor-pointer">
            +
          </div>
        </div>
        <div className="flex justify-end">
          <div
            onClick={addBasket}
            className="border w-[150px] h-10 flex items-center justify-center text-xl rounded-md
         bg-gray-100 cursor-pointer mt-4 "
          >
            Add to Basket
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;