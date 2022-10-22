import { Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Stack
      className="navbar"
      bg="gray.800"
      w={'100%'}
      textColor={'white'}
      p={6}
    >
      <Link to={'/'}>
        <Heading as="h4" size="md" fontFamily={'monospace'}>
          ¡SPACE·R0CKETS!
        </Heading>
      </Link>
    </Stack>
  );
};

export default Navbar;
