// useFetchById.js
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const useFetchById = (endpoint, id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataById = async () => {
    setIsLoading(true);

    try {
      const response = await supabase.from(endpoint).select().eq('id', id);

      setData(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, [endpoint, id]);

  const refetch = () => {
    setIsLoading(true);
    fetchDataById();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchById;
