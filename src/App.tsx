import { VStack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './pages/Home';
import Launches from './pages/Launches';

// export default Navbar

function App() {
  return (
    <VStack className="App" h={'100%'} w={'100%'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":launches" element={<Launches />} />
      </Routes>
    </VStack>
  );
}

export default App;
