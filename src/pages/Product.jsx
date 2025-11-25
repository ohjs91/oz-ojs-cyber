import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '@/hooks/useAxiosProduct';
const Product = () => {
  const { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(category);

  const {
    data: categoryProd,
    loading,
    error,
  } = useProducts({
    type: 'category',
    category: selectedCategory,
    limit: 6,
    skip: 0,
  });

  const { data: categoryList } = useProducts({
    type: 'categoryList',
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loadCategory = (item) => {
    setSelectedCategory(item);
  };
  return (
    <>
      <div>
        <ul>
          {categoryList.map((item) => {
            return (
              <li key={item}>
                <button type="button" onClick={() => loadCategory(item)}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {categoryProd.total}
        {categoryProd?.products?.map((item) => {
          return (
            <div>
              <p key={item.id}>{item.images[0]}</p>
              <p> {item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
