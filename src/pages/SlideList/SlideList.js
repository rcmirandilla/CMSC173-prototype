import React,{useState} from 'react'
import { Stack, Heading, HStack, Spacer, Button, Flex, SimpleGrid, VStack, Image, Text, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { initialData } from './index'

export const SlideList = () => {
  const [data, setData] = useState(initialData);
  
  return (
    <VStack>
      {/* Section Header */}
      <Flex w="80vw">
        <Heading>Slides</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />} >Create</Button>
      </Flex>
      
      {/* Grid Slides */}
      <SimpleGrid columns={3} spacing={8}>
        {
          data.map((item, i) => (
            <Box bg="gray.200" h="30vh" w="25vw">
              <Image />
              <Heading>{item.title}</Heading>
              <Text>{item.date}</Text>
            </Box>
          ))
        }
      </SimpleGrid>
    </VStack>
  )
}
