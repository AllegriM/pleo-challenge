import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { launchData, launchPad } from '../vite-env';

interface optionsProps {
  offset?: number;
  limit?: number;
  order?: string;
  sort?: string;
  site_id?: string;
}

type T = keyof optionsProps;

const fetcher = async (...args: string[]) => {
  console.log(args[0]);
  const response = await fetch(...args);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
};

function getSpaceXUrl(url: string, options: optionsProps) {
  const searchParams = new URLSearchParams();
  for (const property in options) {
    searchParams.append(property, options[property]);
  }
  return `${url}?${searchParams.toString()}`;
}

export function useSpaceX(url: string, options: optionsProps) {
  const endpointUrl = getSpaceXUrl(url, options);
  return useSWR(url ? endpointUrl : null, fetcher);
}

export function useSpaceXPaginated(url: string, options: optionsProps) {
  return useSWRInfinite<launchData[] | launchPad[]>(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return getSpaceXUrl(url, {
        ...options,
        offset: options.limit * pageIndex,
      });
    },
    fetcher,
  );
}

// export default useSectionData;
