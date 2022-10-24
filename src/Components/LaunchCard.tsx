import { Badge, Image, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LaunchData } from '../vite-env';

function LaunchCard({ launchData }: LaunchData) {
  return (
    <Link to={`/launches/${launchData.flight_number}`}>
      <VStack
        cursor={'pointer'}
        border={'1px solid #eaeaea'}
        w={'350px'}
        p={2}
        boxShadow={'lg'}
        borderRadius={6}
      >
        <Image
          src={
            launchData?.links?.flickr_images[0]?.replace('_0.jpg', '_z.jpg') ??
            launchData?.links?.mission_patch_small
          }
          alt={`${launchData.mission_name} launch`}
          w={'100%'}
          objectPosition="bottom"
          objectFit={'cover'}
          h={'300'}
        />
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
    </Link>
  );
}

export default LaunchCard;
