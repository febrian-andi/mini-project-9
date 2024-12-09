import useSWR from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
    .then((res) => res.data);

export const useFetchData = (url, id = null) => {

  const { data, error, isLoading: loading, mutate } = useSWR(
    id ? `${API_URL}${url}/${id}` : `${API_URL}${url}`,
    (url) => fetcher(url)
  );

  const errorMessage = error
    ? error?.response?.data?.error || "Something went wrong"
    : null;

  return { data, error: errorMessage, loading };
};