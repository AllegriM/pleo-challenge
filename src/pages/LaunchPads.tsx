import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LaunchPadCard from '../Components/LaunchPadCard';
import BreadCrumbs from '../Components/UI Components/BreadCrumbs';
import Loader from '../Components/UI Components/Loader';
import Separator from '../Components/UI Components/Separator';
import usePaginate from '../hooks/usePaginate';
import useSectionData from '../hooks/useSectionData';

const LaunchPads: React.FC = () => {
  const { data, error } = useSectionData();
  const { showMoreCards, paginate } = usePaginate({
    initialPage: 6,
    step: 6,
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
        {data.slice(0, paginate).map((launchPad) => {
          return <LaunchPadCard key={launchPad.id} launchPadData={launchPad} />;
        })}
      </Stack>
      <Stack w={'100%'} align="center" p={10}>
        <Button
          w={'min-content'}
          onClick={showMoreCards}
          disabled={data.length === paginate}
        >
          Show more
        </Button>
      </Stack>
    </Container>
  );
};

export default LaunchPads;
