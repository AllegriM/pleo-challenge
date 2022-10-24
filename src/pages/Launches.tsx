import { Button, Container, Grid, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LaunchCard from '../Components/LaunchCard';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import Loader from '../Components/UI Components/Loader';
import usePaginate from '../hooks/usePaginate';
import useSectionData from '../hooks/useSectionData';

const Launches: React.FC = () => {
  const { data, error } = useSectionData();
  const { showMoreCards, paginate } = usePaginate({
    initialPage: 12,
    step: 8,
    data,
  });

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
          {data.slice(0, paginate).map((launch, index: number) => {
            return <LaunchCard key={index} launchData={launch} />;
          })}
        </Grid>
      </Stack>
      <Stack w={'100%'} align="center" p={10}>
        <Button w={'min-content'} onClick={showMoreCards}>
          Show more
        </Button>
      </Stack>
    </Container>
  );
};

export default Launches;
