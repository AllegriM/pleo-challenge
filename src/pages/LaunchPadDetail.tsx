import {
  AspectRatio,
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Errors from '../Components/Errors';
import Location from '../Components/Icons/Location';
import Navigation from '../Components/Icons/Navigation';
import LaunchCard from '../Components/LaunchCard';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import { useSpaceX } from '../hooks/useSectionData';
import { launchData, launchPad } from '../vite-env';

const LaunchPadDetail: React.FC = () => {
  const { id } = useParams();

  const { data: launchPad, error } = useSpaceX(
    `${import.meta.env.VITE_SPACEX_API_URL}/launchpads/${id}`,
    {},
  );

  const { data: launches } = useSpaceX(
    launchPad ? `${import.meta.env.VITE_SPACEX_API_URL}/launches/past` : '',
    {
      limit: 3,
      order: 'desc',
      sort: 'launch_date_utc',
      site_id: launchPad?.site_id,
    },
  );

  if (error) return <Errors />;

  return (
    <Container maxW={'95%'}>
      <BreadCrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Launch Pad', to: '/launchPads' },
          {
            label: `${id?.toLocaleUpperCase().replaceAll('_', ' ')}`,
            to: `/launchPads/${id}`,
          },
        ]}
      />
      <Stack>
        <Header launchPadData={launchPad} />
        <Box m={[3, 6]}>
          {launchPad && (
            <>
              <LocationAndVehicles launchPadData={launchPad} />
              <Text color="gray.700" fontSize={['md', null, 'lg']} my="8">
                {launchPad?.details}
              </Text>
              <Map launchPadData={launchPad?.location} />
            </>
          )}
          {launches && <RecentLaunches launches={launches} />}
        </Box>
      </Stack>
    </Container>
  );
};
const randomColor = (start = 200, end = 250) =>
  `hsl(${start + end * Math.random()}, 80%, 90%)`;

function Header({ launchPadData }: launchPad) {
  return (
    <Flex
      background={`linear-gradient(${randomColor()}, ${randomColor()})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minHeight="15vh"
      position="relative"
      flexDirection={['column', 'row']}
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Heading
        color="gray.900"
        display="inline"
        mx={[2, 4]}
        my="2"
        fontSize={['md', '3xl']}
        borderRadius="lg"
      >
        {launchPadData?.site_name_long}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme="purple" fontSize={['sm', 'md']}>
          {launchPadData?.successful_launches}/
          {launchPadData?.attempted_launches} successful
        </Badge>
        {launchPadData?.status === 'active' ? (
          <Badge colorScheme="green" fontSize={['sm', 'md']}>
            Active
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize={['sm', 'md']}>
            Retired
          </Badge>
        )}
      </Stack>
    </Flex>
  );
}

function LocationAndVehicles({ launchPadData }: launchPad) {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Location} width="1em" />{' '}
          <Box ml="2" as="span">
            Location
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">{launchPadData.location.name}</StatNumber>
        <StatHelpText>{launchPadData.location.region}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />{' '}
          <Box ml="2" as="span">
            Vehicles
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">
          {launchPadData.vehicles_launched.join(', ')}
        </StatNumber>
      </Stat>
    </SimpleGrid>
  );
}

function Map({ launchPadData }: launchPad) {
  return (
    <AspectRatio ratio={16 / 5}>
      <Box
        as="iframe"
        src={`https://maps.google.com/maps?q=${launchPadData?.location?.latitude}, ${launchPadData?.location?.longitude}&z=15&output=embed`}
      />
    </AspectRatio>
  );
}

function RecentLaunches({ launches }: launchData[]) {
  console.log(launches);
  if (!launches.length) {
    return null;
  }
  return (
    <Stack my="8" spacing="3">
      <Text fontSize="xl" fontWeight="bold">
        Last launches
      </Text>
      <SimpleGrid minChildWidth="350px" spacing="4">
        {launches.flat().map((launch, index: number) => (
          <LaunchCard key={index} launchData={launch} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
export default LaunchPadDetail;
