import React, {useRef, useState} from 'react'
import { FormControl, Input, FormLabel, InputGroup, InputLeftElement, Heading  } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

export const UploadSlide = () => {
  const inputRef = useRef()
  const [value, setValue] = useState()

  return (
    <div>
      <FormControl id="file" mt="20vh">
        <FormLabel><Heading fontSize="3xl">Upload</Heading></FormLabel>
        <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AttachmentIcon color="primary" />}
        />
          <Input
            placeholder="Upload you presentation here..."
            onClick={() => inputRef.current.click()}
            value={value}
            bg="white"
            size="lg"
            w="40vw"
          />
          <input type='file' onChange={(e) => setValue(e.target.value)} name="file" ref={inputRef} style={{ display: 'none' }}></input>
        </InputGroup>
      </FormControl>
    </div>
  )
}
