import React from 'react'
import { Heading, HStack, VStack, Flex, Spacer, Button, Box, IconButton } from '@chakra-ui/react'
import { EditIcon, QuestionIcon, ChatIcon, CheckCircleIcon, TimeIcon, ViewIcon, StarIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'

export const CreateSlide = () => {
  const history = useHistory()

  return (
    <div>
      <Flex align="center" w="95vw" h="12vh">
        <Heading>Untitled</Heading>
        <Spacer />
        <Button leftIcon={<StarIcon />} onClick={() => history.push('/present')}>Present</Button>
      </Flex>
      <HStack spacing={12} align="flex-start" justify="center">
            <Box w="20vw" maxH="70vh" overflowY="auto">
              <VStack align="flex-start">
                <Button size="sm" w="80%">New</Button>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
                <Box w="80%" h="120px" bg="white"></Box>
              </VStack>
            </Box>
        <Box bg="white" w="60vw" h="70vh"> </Box>
        <VStack w="4vw" color="blue.600" py="4" borderRadius="base" bg="white">
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