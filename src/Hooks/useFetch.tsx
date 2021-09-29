/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface menu{
  id?:string;
  title?:string
}

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setData(data);
  };

  useEffect(() => {
    fetchData();
    setLoading('loading....');
    setData(null);
    setError(null);
    // const source = axios.CancelToken.source();
    setTimeout(() => {
      axios;
      const response = axios.get(url)
        .then((res) => {
          setLoading(false);
          // res.content && setData(res.content);
        })
        // @ts-ignore
        .catch((err: any) => {
          setLoading(false);
          setError('An error occured. Awkard...');
        });
    }, 100);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
