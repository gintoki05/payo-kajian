import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/http';
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
      // const response = await axios.request(options);
      const response = await supabase.from(endpoint).select();

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
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
