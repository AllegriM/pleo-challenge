import { Stack } from '@chakra-ui/react';
import InfoPanel from '../Components/InfoPanel';

const Home: React.FC = () => {
  const SECTIONS = [
    { id: 'launches', title: 'Browse SpaceX Launches' },
    { id: 'launchPads', title: 'Browse SpaceX Launch Pads' },
  ];

  return (
    <Stack bg={'white'} w={'95%'} h={'100%'} pt={'1rem'} gap={4}>
      {SECTIONS.map((section) => {
        return (
          <InfoPanel
            key={section.id}
            sectionID={section.id}
            title={section.title}
          />
        );
      })}
    </Stack>
  );
};
export default Home;
