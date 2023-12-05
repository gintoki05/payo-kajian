import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: 'GET',
  //   url: `${BASE_URL}/${endpoint}`,
  //   params: { ...query },
  // };

  const fetchAllData = async () => {
    setIsLoading(true);

    try {
      let supabaseQuery = supabase
        .from(endpoint)
        .select()
        .order('id', { ascending: false });

      if (query && query.range) {
        const [start, end] = query.range;
        supabaseQuery = supabaseQuery.range(start, end);
      }

      const response = await supabaseQuery;

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchAllData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
