import React, { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort }) => {
  const [ products, setProducts ] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        if (category) {
          response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        } else {
          response = await fetch('https://fakestoreapi.com/products');
        }

        const data = await response.json();

        setProducts(data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
      finally { 
        setLoading(false);
      }
    };

    fetchData();
  }, [ category]); // Only re-run on category change

  // useEffect(() => {
  //   if (category) {
  //     dispatch(getCategoryProducts(category));
  //   } else {
  //     dispatch(getProducts());
  //   }
  //   dispatch(getProducts());
  // }, [dispatch, category]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap gap-4 ms-2 ">
            {currentItems
              ?.sort((a, b) =>
                sort === 'Inc'
                  ? a.price - b.price
                  : sort === 'Dec'
                  ? b.price - a.price
                  : null
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
