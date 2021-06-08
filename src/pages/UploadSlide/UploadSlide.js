import React, { useRef, useState } from 'react';
import {
	FormControl,
	Input,
	FormLabel,
	InputGroup,
	InputLeftElement,
	Heading,
	Button,
	Flex,
	useToast,
} from '@chakra-ui/react';
import { AttachmentIcon, ArrowUpIcon } from '@chakra-ui/icons';

export const UploadSlide = () => {
	const inputRef = useRef();
	const [value, setValue] = useState();
	const toast = useToast();

	return (
		<Flex
			h='100%'
			direction='column'
			justify='center'
			w={['80%', '70%', '60%', '50%']}>
			<FormControl id='file'>
				<FormLabel>
					<Heading
						fontSize='3xl'
						textAlign='center'
						mb='20'
						color='primary'>
						PRESENTATION SLIDE UPLOAD
					</Heading>
				</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<AttachmentIcon color='primary' />}
					/>
					<Input
						placeholder='Upload your presentation here...'
						onClick={() => inputRef.current.click()}
						value={value}
						bg='white'
						size='lg'
						w='100%'
					/>
					<input
						type='file'
						onChange={(e) => setValue(e.target.value)}
						name='file'
						ref={inputRef}
						style={{ display: 'none' }}></input>
				</InputGroup>
			</FormControl>
			<Flex justify='flex-end' mt='4'>
				<Button
					w='100%'
					onClick={() =>
						toast({
							title: 'Your file has been uploaded',
							duration: '3000',
						})
					}
					colorScheme='blue'
					leftIcon={<ArrowUpIcon />}>
					Upload
				</Button>
			</Flex>
		</Flex>
	);
};
