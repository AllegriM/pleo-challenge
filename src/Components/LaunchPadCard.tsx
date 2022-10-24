import { Badge, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { LaunchPad } from '../vite-env';

function LaunchPadCard({ launchPadData }: LaunchPad) {
  return (
    <Link to={`/launchPads/${launchPadData.site_id}`}>
      <Stack
        key={launchPadData.id}
        boxShadow={'md'}
        border={'1px solid #eaeaea'}
        p={6}
        borderRadius={6}
        cursor={'pointer'}
        mt={2}
      >
        <HStack>
          <Badge
            variant={'solid'}
            colorScheme={launchPadData.status === 'active' ? 'green' : 'red'}
          >
            {launchPadData.status === 'active' ? 'Active' : 'Retired'}
          </Badge>
          <Text color={'gray.500'} fontSize={'small'} fontWeight={'semibold'}>
            {launchPadData.attempted_launches} ATTEMPETED •{' '}
            {launchPadData.successful_launches} SUCCEEDED
          </Text>
        </HStack>
        <VStack spacing={1} align={'flex-start'} display={'block'}>
          <Heading
            as="h5"
            size="sm"
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
          >
            {launchPadData.site_name_long}
          </Heading>
          <Text fontSize={'.9rem'} color={'gray.500'}>
            {launchPadData.vehicles_launched.join(', ')}
          </Text>
        </VStack>
      </Stack>
    </Link>
  );
}

export default LaunchPadCard;
