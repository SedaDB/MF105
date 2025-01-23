import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';

interface ProductProps {
  product?: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const productData = useMemo(() => {
    if (!product) {
      return null;
    }

    return {
      id: product.id,
      title: product.title,
      image: product.image || '',
      price: product.price.toFixed(2), 
    };
  }, [product]);

  if (!productData) {
    return null; 
  }

  return (
    <div
      onClick={() => navigate(`products/${productData.id}`)}
      className="w-[430px] p-3 mb-2 mx-2 border rounded-md relative cursor-pointer"
    >
      <div className="text-xl font-bold absolute rounded-md top-2 right-2 bg-red-600 text-white px-3 py-2 m-1">
        {productData.price} <span className="text-md">₺</span>
      </div>
      <img
        className="w-[250px] h-[200px] object-contain m-auto rounded"
        src={productData.image}
        alt=""
      />
      <div className="text-center px-3 m-3 font-bold text-xl">
        {productData.title}
      </div>
    </div>
  );
};

export default Product;