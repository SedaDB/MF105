import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [url]);

  return { data, error };
}

export default useAxios; 