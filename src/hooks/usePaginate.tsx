import { useState } from 'react';
import { launchData, launchPad } from '../vite-env';

interface PaginateProps {
  initialPage: number;
  step: number;
  data?: launchPad[] | launchData[];
}

function usePaginate({ initialPage, step, data }: PaginateProps) {
  const [paginate, setPaginate] = useState(initialPage);

  const showMoreCards = () => {
    setPaginate((initialPage) => initialPage + step);
  };

  return { showMoreCards, paginate };
}

export default usePaginate;
