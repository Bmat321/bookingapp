import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
