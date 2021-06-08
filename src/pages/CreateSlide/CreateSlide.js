import React from 'react'
import { Heading, HStack, VStack, Flex, Spacer, Button, Box, IconButton, Image } from '@chakra-ui/react'
import { AddIcon, EditIcon, QuestionIcon, ChatIcon, CheckCircleIcon, TimeIcon, ViewIcon, StarIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import Present_1 from '../../assets/Present_1.png'
import Present_2 from '../../assets/Present_2.png'
import Present_3 from '../../assets/Present_3.png'
import Present_4 from '../../assets/Present_4.png'
import Present_5 from '../../assets/Present_5.png'

export const CreateSlide = () => {
  const history = useHistory()

  return (
    <div>
      <Flex align="center" w="95vw" h="12vh">
        <Heading>Untitled</Heading>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<StarIcon />} onClick={() => history.push('/present')}>Present</Button>
      </Flex>
      <HStack spacing={12} align="flex-start">
            <Box w="20vw" p="4" maxH="70vh" overflowY="auto">
              <VStack spacing={4} align="flex-start">
                <Button leftIcon={<AddIcon />} size="sm" w="100%">New</Button>
                <Image src={Present_1} h="120px" border="solid 2px" borderColor="primary" borderRadius="base"/>
                <Image src={Present_2} h="120px" />
                <Image src={Present_3} h="120px" />
                <Image src={Present_4} h="120px" />
                <Image src={Present_5} h="120px" />
              </VStack>
            </Box>
        <Box bg="white" bgImage={Present_1} bgSize="60vw 70vh" boxShadow="md" w="60vw" h="70vh"> </Box>
        <VStack w="4vw" color="primary" py="4" borderRadius="base" bg="white">
          <IconButton variant="ghost" icon={<EditIcon />} />
          <IconButton variant="ghost" icon={<QuestionIcon />} />
          <IconButton variant="ghost" icon={<ChatIcon />} />
          <IconButton variant="ghost" icon={<CheckCircleIcon />} />
          <IconButton variant="ghost" icon={<TimeIcon />} />
          <IconButton variant="ghost" icon={<ViewIcon />} />
        </VStack>
      </HStack>
    </div>
  )
}