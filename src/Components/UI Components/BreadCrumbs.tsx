import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Separator from './Separator';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    to: string;
  }>;
}

function BreadCrumbs({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb
      color={'gray.400'}
      py={4}
      separator={<Separator />}
      textAlign={'start'}
      w={'100%'}
    >
      {items.map((path) => {
        return (
          <BreadcrumbItem key={path.label}>
            <Link to={`${path.to}`}>
              <Text color={'black'} _hover={{ textDecoration: 'underline' }}>
                {path.label}
              </Text>
            </Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

export default BreadCrumbs;
