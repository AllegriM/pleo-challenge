import { Container, Grid, Stack } from '@chakra-ui/react';
import LaunchCard from '../Components/LaunchCard';
import Loader from '../Components/UI Components/Loader';
import useSectionData from '../hooks/useSectionData';

const Launches: React.FC = () => {
  const { data, error } = useSectionData();
  console.log(data);
  if (!data) {
    return <Loader />;
  }

  return (
    <Stack w={'100%'} px={6}>
      <Grid gridTemplateColumns={'repeat(auto-fit, minmax(400px, 1fr))'}>
        {data.map((launch, index) => {
          return <LaunchCard key={index} launchData={launch} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Launches;
