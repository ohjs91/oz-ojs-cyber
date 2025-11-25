import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';
export default function useProducts({
  type = 'all',
  category = null,
  limit = 5,
  skip = 0,
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = '';

        switch (type) {
          case 'all':
            url = `${BASE_URL}?limit=${limit}`;
            break;

          case 'category':
            if (!category) throw new Error('category 값이 없습니다.');
            url = `${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`;
            break;

          case 'categoryList':
            url = `${BASE_URL}/category-list`;
            break;

          default:
            throw new Error('유효하지 않은 type 입니다.');
        }

        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, category]);

  return { data, loading, error };
}
