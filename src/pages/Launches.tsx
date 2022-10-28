import { Container, Grid, Stack } from '@chakra-ui/react';
import Errors from '../Components/Errors';
import LaunchCard from '../Components/LaunchCard';
import LoadMoreButton from '../Components/LoadMoreButton';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import Loader from '../Components/UI Components/Loader';
import { useSpaceXPaginated } from '../hooks/useSectionData';

const LAUNCH_CARDS = 12;

const Launches: React.FC = () => {
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    `${import.meta.env.VITE_SPACEX_API_URL}/launches`,
    {
      limit: LAUNCH_CARDS,
      order: 'desc',
      sort: 'launch_date_utc',
    },
  );

  if (!data) {
    return <Loader />;
  }

  return (
    <Container maxW={'95%'}>
      <BreadCrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Launches', to: '/launches' },
        ]}
      />
      <Stack w={'100%'}>
        <Grid
          gap={4}
          gridTemplateColumns={'repeat(auto-fit, minmax(320px, 1fr))'}
        >
          {error && <Errors />}
          {data &&
            data.flat().map((launch, index: number) => {
              return <LaunchCard key={index} launchData={launch} />;
            })}
        </Grid>
      </Stack>
      <Stack w={'100%'} align="center" p={10}>
        <LoadMoreButton
          w={'min-content'}
          loadMore={() => setSize(size + 1)}
          data={data}
          pageSize={LAUNCH_CARDS}
          isLoadingMore={isValidating}
        >
          Show more
        </LoadMoreButton>
      </Stack>
    </Container>
  );
};

export default Launches;
