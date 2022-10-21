import { useState } from 'react'
import { Heading, Stack, Text, VStack, HStack } from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";
import ArrowRight from './Components/Icons/Arrow';


const Home: React.FC = () => {
  
  const SECTIONS = [{id: "launches", title: "Browse SpaceX Launches"}, {id: "launch-pads", title: "Browse SpaceX Launch Pads"}]
  
  return(
    <Stack bg={"white"} w={"95%"} h={"100%"} pt={"1rem"} gap={4}>
      {
        SECTIONS.map(section => {
          return(
            <Link key={section.id} to={section.id}>
              <HStack _hover={{ textDecoration: "underline"}} p={6} justify={"space-between"} borderRadius={8} border={"1px solid #e9e9e9"} boxShadow={"lg"} cursor={"pointer"} w={"100%"}>
                <Heading as='h4' size='md' fontWeight={"normal"}>{section.title}</Heading>
                <ArrowRight />
              </HStack>
            </Link>
          )
        })
      }
    </Stack>
  )
}

const Navbar: React.FC = () =>  {
  return (
    <Stack className='navbar' bg="gray.800" w={"100%"} textColor={"white"} p={6}>
      <Heading  as='h4' size='md' fontFamily={"monospace"}>¡SPACE·R0CKETS!</Heading>
    </Stack>
  )
}

// export default Navbar

function App() {
  const [count, setCount] = useState(0)

  return (  
    <VStack className="App" h={"100%"} w={"100%"} >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </VStack>
  )
}

export default App
