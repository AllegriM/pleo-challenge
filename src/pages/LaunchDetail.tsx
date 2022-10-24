import {
  AspectRatio,
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Rocket from '../Components/Icons/Box';
import Location from '../Components/Icons/Location';
import Rocket2 from '../Components/Icons/Rocket2';
import Watch from '../Components/Icons/Watch';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import useSectionData from '../hooks/useSectionData';
import { LaunchPad } from '../vite-env';

const LaunchDetail: React.FC = () => {
  const { data, error, id } = useSectionData();

  return (
    <Container maxW={'95%'}>
      <BreadCrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Launches', to: '/launches' },
          { label: `#${id}`, to: `/launches/${id}` },
        ]}
      />
      <Header launch={data} />
      <TimeAndLocation launch={data} />
      <RocketInfo launch={data} />
      <Text color="gray.700" fontSize={['md', null, 'lg']} my="8">
        {data?.details}
      </Text>
      <Video launch={data} />
      <Gallery images={data?.links?.flickr_images} />
    </Container>
  );
};

export default LaunchDetail;

function Header({ launch }: LaunchPad) {
  return (
    <Flex
      bgImage={`url(${launch?.links?.flickr_images[0]})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minHeight="30vh"
      position="relative"
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Image
        position="absolute"
        top="5"
        right="5"
        src={launch?.links?.mission_patch_small}
        height={['85px', '150px']}
        objectFit="contain"
        objectPosition="bottom"
      />
      <Heading
        color="white"
        display="inline"
        backgroundColor="#718096b8"
        fontSize={['lg', '5xl']}
        px="4"
        py="2"
        borderRadius="lg"
      >
        {launch?.mission_name}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme={'purple'} fontSize={['xs', 'md']}>
          #{launch?.flight_number}
        </Badge>
        {launch?.launch_success ? (
          <Badge colorScheme="green" fontSize={['xs', 'md']}>
            Successful
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize={['xs', 'md']}>
            Failed
          </Badge>
        )}
      </Stack>
    </Flex>
  );
}

function TimeAndLocation({ launch }: LaunchPad) {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex" alignItems={'center'}>
          <Box as={Watch} width="1em" />{' '}
          <Box ml="2" as="span">
            Launch Date
          </Box>
        </StatLabel>
        <StatNumber fontSize={['md', 'xl']}></StatNumber>
        <StatHelpText></StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex" alignItems={'center'}>
          <Box as={Location} width="1em" />{' '}
          <Box ml="2" as="span">
            Launch Site
          </Box>
        </StatLabel>
        <StatNumber fontSize={['md', 'xl']}>
          <Link to={`/launch-pads/${launch?.launch_site?.site_id}`}>
            {launch?.launch_site?.site_name_long}
          </Link>
        </StatNumber>
        <StatHelpText>{launch?.launch_site?.site_name}</StatHelpText>
      </Stat>
    </SimpleGrid>
  );
}

function RocketInfo({ launch }: LaunchPad) {
  const cores = launch?.rocket?.first_stage?.cores;

  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      borderWidth="1px"
      mt="4"
      p="4"
      borderRadius="md"
    >
      <Stat>
        <StatLabel display="flex" alignItems={'center'}>
          <Box as={Rocket} width="1em" />{' '}
          <Box ml="2" as="span">
            Rocket
          </Box>
        </StatLabel>
        <StatNumber fontSize={['md', 'xl']}>
          {launch?.rocket?.rocket_name}
        </StatNumber>
        <StatHelpText>{launch?.rocket?.rocket_type}</StatHelpText>
      </Stat>
      <StatGroup>
        <Stat>
          <StatLabel display="flex" alignItems={'center'}>
            <Box as={Rocket} width="1em" />{' '}
            <Box ml="2" as="span">
              First Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={['md', 'xl']}>
            {cores?.map((core) => core?.core_serial).join(', ')}
          </StatNumber>
          <StatHelpText>
            {cores?.every((core) => core?.land_success)
              ? cores.length === 1
                ? 'Recovered'
                : 'All recovered'
              : 'Lost'}
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex" alignItems={'center'}>
            <Box as={Rocket2} width="1em" />{' '}
            <Box ml="2" as="span">
              Second Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={['md', 'xl']}>
            Block {launch?.rocket?.second_stage?.block}
          </StatNumber>
          <StatHelpText>
            Payload:{' '}
            {launch?.rocket?.second_stage?.payloads
              .map((payload) => payload?.payload_type)
              .join(', ')}
          </StatHelpText>
        </Stat>
      </StatGroup>
    </SimpleGrid>
  );
}

function Video({ launch }) {
  return (
    <AspectRatio maxH="400px" ratio={1.7}>
      <Box
        as="iframe"
        title={launch?.mission_name}
        src={`https://www.youtube.com/embed/${launch?.links?.youtube_id}`}
        allowFullScreen
      />
    </AspectRatio>
  );
}

function Gallery({ images }) {
  return (
    <Box my="6" sx={{ columnCount: [1, 2, 3, 4], columnGap: '8px' }}>
      {images?.map((image) => (
        <Image
          maxWidth={'100%'}
          mb={2}
          src={image?.replace('_o.jpg', '_z.jpg')}
        />
      ))}
    </Box>
  );
}
