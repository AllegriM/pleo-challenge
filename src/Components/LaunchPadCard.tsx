import { Badge, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { LaunchPad } from '../vite-env';

function LaunchPadCard({ launchPadData }: LaunchPad) {
  return (
    <Stack
      key={launchPadData.id}
      boxShadow={'md'}
      border={'1px solid #eaeaea'}
      p={4}
      borderRadius={6}
      cursor={'pointer'}
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
      <VStack spacing={1} align={'flex-start'}>
        <Text fontWeight={'semibold'} wordBreak={'keep-all'}>
          {launchPadData.site_name_long}
        </Text>
        <Text fontSize={'.9rem'} color={'gray.500'}>
          {launchPadData.vehicles_launched.join(', ')}
        </Text>
      </VStack>
    </Stack>
  );
}

export default LaunchPadCard;
