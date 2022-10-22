import { Badge, Image, HStack, Text, VStack } from '@chakra-ui/react';
import { LaunchData } from '../vite-env';

function LaunchCard({ launchData }: LaunchData) {
  console.log(launchData);
  return (
    <VStack
      cursor={'pointer'}
      border={'1px solid #eaeaea'}
      my={4}
      w={'400px'}
      p={2}
      boxShadow={'lg'}
    >
      <Image src={launchData?.links?.mission_patch} w={'400'} h={'300'} />
      <VStack w={'100%'} px={6}>
        <HStack
          py={1}
          w={'100%'}
          color={'gray.500'}
          fontWeight={'medium'}
          gap={2}
          justify={'flex-start'}
        >
          <Badge
            w={'fit-content'}
            colorScheme={launchData.launch_success ? 'green' : 'red'}
          >
            {launchData.launch_success ? 'Successful' : 'Failed'}
          </Badge>
          <Text fontSize={14}>
            {launchData?.rocket?.rocket_name} •{' '}
            {launchData.launch_site.site_name}
          </Text>
        </HStack>
        <Text textAlign={'start'} fontWeight={'semibold'} width={'100%'}>
          {launchData.mission_name}
        </Text>
      </VStack>
    </VStack>
  );
}

export default LaunchCard;
