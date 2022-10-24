import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { LaunchData, LaunchPad } from '../vite-env';

function useSectionData() {
  const location = useLocation();
  const { id } = useParams();
  const actualLocation = location.pathname.slice(1).toLocaleLowerCase();

  const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      throw error;
    }

    return res.json();
  };

  function getSpaceXUrl() {
    const spaceXApiBase = import.meta.env.VITE_SPACEX_API_URL;
    if (id) {
      return `${spaceXApiBase}${actualLocation}`;
    }
    return `${spaceXApiBase}${actualLocation}`;
  }

  const { data, error } = useSWR<LaunchData[] | LaunchPad[]>(
    `${getSpaceXUrl()}`,
    fetcher,
  );

  return { data, error, id };
}

export default useSectionData;
