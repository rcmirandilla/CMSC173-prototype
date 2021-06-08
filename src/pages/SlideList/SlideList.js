import React,{useState} from 'react'
import { Heading, SimpleGrid, VStack, Image, Text, Box } from '@chakra-ui/react'
import { initialData } from './index'
import { useHistory } from 'react-router-dom'

export const SlideList = () => {
  const [data, setData] = useState(initialData);
  const history = useHistory()


  return (
    <VStack pt="8" pb="8"> 
      {/* Grid Slides */}
      <SimpleGrid columns={3} spacing={8}>
        {
          data.map((item, i) => (
            <Box key={i} p="4" transition="0.5s" _hover={{bg: "whiteAlpha.800", cursor: "pointer"}} onClick={() => history.push('/present')}>
              <Image src={item.image} objectFit="fill" h="30vh" w="25vw"/>
              <Heading mt="2" fontSize="sm">{item.title}</Heading>
              <Text fontSize="xs">{`Last Opened ${item.date.toDateString()}`}</Text>
            </Box>
          ))
        }
      </SimpleGrid>
    </VStack>
  )
}
