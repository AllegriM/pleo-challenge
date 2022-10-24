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
import Location from '../Components/Icons/Location';
import Navigation from '../Components/Icons/Navigation';
import LaunchCard from '../Components/LaunchCard';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import useSectionData from '../hooks/useSectionData';

const LaunchPadDetail: React.FC = () => {
  const { data, error, id } = useSectionData();

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
        <Header launchPad={data} />
        <Box m={[3, 6]}>
          <LocationAndVehicles launchPad={data} />
          <Text color="gray.700" fontSize={['md', null, 'lg']} my="8">
            {data?.details}
          </Text>
          <Map location={data?.location} />
          {/* <RecentLaunches launchPad={data} /> */}
        </Box>
      </Stack>
    </Container>
  );
};
const randomColor = (start = 200, end = 250) =>
  `hsl(${start + end * Math.random()}, 80%, 90%)`;

function Header({ launchPad }) {
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
        {launchPad?.site_name_long}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme="purple" fontSize={['sm', 'md']}>
          {launchPad?.successful_launches}/{launchPad?.attempted_launches}{' '}
          successful
        </Badge>
        {launchPad?.stats === 'active' ? (
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

function LocationAndVehicles({ launchPad }) {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Location} width="1em" />{' '}
          <Box ml="2" as="span">
            Location
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">{launchPad?.location?.name}</StatNumber>
        <StatHelpText>{launchPad?.location?.region}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />{' '}
          <Box ml="2" as="span">
            Vehicles
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">
          {launchPad?.vehicles_launched?.join(', ')}
        </StatNumber>
      </Stat>
    </SimpleGrid>
  );
}

function Map({ location }) {
  return (
    <AspectRatio ratio={16 / 5}>
      <Box
        as="iframe"
        src={`https://maps.google.com/maps?q=${location?.latitude}, ${location?.longitude}&z=15&output=embed`}
      />
    </AspectRatio>
  );
}

// function RecentLaunches({ launchPad }) {
//   console.log(launchPad);
//   if (!launchPad?.length) {
//     return null;
//   }
//   return (
//     <Stack my="8" spacing="3">
//       <Text fontSize="xl" fontWeight="bold">
//         Last launches
//       </Text>
//       <SimpleGrid minChildWidth="350px" spacing="4">
//         {launchPad.map((launch, index: number) => (
//           <LaunchCard key={index} launchData={launch} />
//         ))}
//       </SimpleGrid>
//     </Stack>
//   );
// }
export default LaunchPadDetail;
