import React, {useRef, useState} from 'react'
import { FormControl, Input, FormLabel, InputGroup, InputLeftElement,  } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/react'

export const UploadSlide = () => {
  const inputRef = useRef()
  const [value, setValue] = useState()

  return (
    <div>
      <FormControl id="file" mt="20vh">
        <FormLabel>Upload</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={AttachmentIcon}
          />
          <input type='file' onChange={(e) => setValue(e.target.value)} name="file" ref={inputRef} style={{ display: 'none' }}></input>
          <Input
            placeholder="Your file ..."
            onClick={() => inputRef.current.click()}
            value={value}
          />
        </InputGroup>
      </FormControl>
    </div>
  )
}
