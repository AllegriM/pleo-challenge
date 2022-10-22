import { Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ArrowRight from './Icons/Arrow';

interface PanelInfo {
  sectionID: string;
  title: string;
}

const InfoPanel: React.FC<PanelInfo> = ({ sectionID, title }) => {
  return (
    <Link key={sectionID} to={sectionID}>
      <HStack
        _hover={{ textDecoration: 'underline' }}
        p={6}
        justify={'space-between'}
        borderRadius={8}
        border={'1px solid #e9e9e9'}
        boxShadow={'lg'}
        cursor={'pointer'}
        w={'100%'}
      >
        <Heading as="h4" size="md" fontWeight={'normal'}>
          {title}
        </Heading>
        <ArrowRight />
      </HStack>
    </Link>
  );
};

export default InfoPanel;
