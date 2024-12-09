import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const usePostData = (url) => {
  const [loading, setLoading] = useState(false);

  const postData = async (data, onSuccess, onError) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}${url}`, data, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError(error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading };
};
