import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <Stack justify={'center'}>
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
      />
    </Stack>
  );
};

export default Loader;
