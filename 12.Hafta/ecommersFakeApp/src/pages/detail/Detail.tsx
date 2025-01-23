import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailComp from '../../components/detail/DetailComp';
import Loader from '../../components/loader/Loader';
import axios from 'axios';
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

const Detail = () => {
  const [productDetail, setData] = useState<ProductDetail | []>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className='w-full h-screen flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
