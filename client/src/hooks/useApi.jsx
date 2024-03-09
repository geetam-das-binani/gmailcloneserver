import { useState } from "react";
import API from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const call = async (payload, type = "") => {
    setResponse(null);
    setError(null);
    setLoader(true);
    try {
      const {data} = await API(urlObject, payload, type);
     

      setResponse(data);
    } catch (error) {
      
      setError(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  return { call, response, error, loader };
};

export default useApi;
