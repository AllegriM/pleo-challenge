import { Button, Container, Stack } from '@chakra-ui/react';
import Errors from '../Components/Errors';
import LaunchPadCard from '../Components/LaunchPadCard';
import LoadMoreButton from '../Components/LoadMoreButton';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import Loader from '../Components/UI Components/Loader';
import usePaginate from '../hooks/usePaginate';
import { useSpaceXPaginated } from '../hooks/useSectionData';
import { launchPad } from '../vite-env';

const LAUNCH_PADS = 6;
const LaunchPads: React.FC = () => {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    `${import.meta.env.VITE_SPACEX_API_URL}/launchpads`,
    {
      limit: LAUNCH_PADS,
    },
  );

  if (error) return <Errors />;

  if (!data) {
    return <Loader />;
  }
  return (
    <Container maxW={'95%'}>
      <BreadCrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Launch Pads', to: '/launchPads' },
        ]}
      />
      <Stack
        display={'grid'}
        gridTemplateColumns={'repeat(auto-fit, minmax(350px, 1fr))'}
        align={'baseline'}
        w={'100%'}
        gap={4}
      >
        {data.flat().map((launchPad) => {
          return <LaunchPadCard key={launchPad.id} launchPadData={launchPad} />;
        })}
      </Stack>
      <Stack w={'100%'} align="center" p={10}>
        <LoadMoreButton
          w={'min-content'}
          loadMore={() => setSize(size + 1)}
          data={data}
          pageSize={LAUNCH_PADS}
          isLoadingMore={isValidating}
        >
          Show more
        </LoadMoreButton>
      </Stack>
    </Container>
  );
};

export default LaunchPads;
