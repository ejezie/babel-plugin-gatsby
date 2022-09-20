import axios from "axios";
import React, { useState, useEffect } from "react";

const useGet = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios(url)
        .then((resp) => setData(resp.data))
        .catch((err) => setError(err));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { loading, data };
  //   return [error, loading, data];
};

export default useGet;