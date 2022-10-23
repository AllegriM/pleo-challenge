import { useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';

function useSectionData() {
  const location = useLocation();
  const actualLocation = location.pathname.slice(1);

  const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      throw error;
    }

    return res.json();
  };

  const { data, error } = useSWR(
    `${import.meta.env.VITE_SPACEX_API_URL + actualLocation}`,
    fetcher,
  );

  return { data, error };
}

export default useSectionData;
