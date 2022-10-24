import { VStack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './pages/Home';
import LaunchDetail from './pages/LaunchDetail';
import Launches from './pages/Launches';
import LaunchPadDetail from './pages/LaunchPadDetail';
import LaunchPads from './pages/LaunchPads';

// export default Navbar

function App() {
  return (
    <VStack className="App" h={'100%'} w={'100%'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launchPads" element={<LaunchPads />} />
        <Route path="/launches/:id" element={<LaunchDetail />} />
        <Route path="/launchPads/:id" element={<LaunchPadDetail />} />
      </Routes>
    </VStack>
  );
}

export default App;
