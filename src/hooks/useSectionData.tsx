import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { LaunchData } from '../vite-env';

interface LaunchDatasProps {
  data: Array<LaunchData>;
}

function useSectionData() {
  const { launches } = useParams<string>();

  const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      throw error;
    }

    return res.json();
  };

  const { data, error } = useSWR<LaunchDatasProps['data']>(
    `${import.meta.env.VITE_SPACEX_API_URL + launches}`,
    fetcher,
  );

  return { data, error };
}

export default useSectionData;
