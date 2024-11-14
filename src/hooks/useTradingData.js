import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_GOOGLE_SHEETS_API_URL; // Accessing the API URL from environment variables

export function useTradingData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("API URL:", apiUrl); // Check if the API URL is being loaded properly

    if (!apiUrl) {
      setError("API URL is not defined.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
