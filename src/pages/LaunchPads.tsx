import Loader from '../Components/UI Components/Loader';
import useSectionData from '../hooks/useSectionData';

const LaunchPads: React.FC = () => {
  const { data, error } = useSectionData();
  console.log(data);
  if (!data) {
    return <Loader />;
  }

  return <div>LaunchPads</div>;
};

export default LaunchPads;
