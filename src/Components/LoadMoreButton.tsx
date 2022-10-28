import { Button, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import { launchData, launchPad } from '../vite-env';

interface ButtonProps {
  loadMore: React.MouseEventHandler<HTMLButtonElement> | undefined;
  pageSize: number;
  data: launchData[] | launchPad[];
  isLoadingMore: boolean;
}

export default function LoadMoreButton({
  loadMore,
  data,
  pageSize,
  isLoadingMore,
}: ButtonProps) {
  const isReachingEnd =
    data?.[0]?.length === 0 ||
    (data && data[data.length - 1]?.length < pageSize);

  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} disabled={isReachingEnd || isLoadingMore}>
        {isLoadingMore ? (
          <Spinner />
        ) : isReachingEnd ? (
          "That's all!"
        ) : (
          'Show more...'
        )}
      </Button>
    </Flex>
  );
}
