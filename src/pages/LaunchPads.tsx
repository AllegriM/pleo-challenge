import { Stack } from '@chakra-ui/react';
import LaunchPadCard from '../Components/LaunchPadCard';
import Loader from '../Components/UI Components/Loader';
import useSectionData from '../hooks/useSectionData';
import { LaunchPad } from '../vite-env';

const LaunchPads: React.FC = () => {
  const { data, error } = useSectionData();
  if (!data) {
    return <Loader />;
  }
  console.log(data);
  return (
    <Stack
      display={'grid'}
      gridTemplateColumns={'repeat(auto-fit, minmax(380px, 1fr))'}
      w={'100%'}
      gap={4}
      px={6}
    >
      {data.map((launchPad: LaunchPad) => {
        return <LaunchPadCard launchPadData={launchPad} />;
      })}
    </Stack>
  );
};

export default LaunchPads;
