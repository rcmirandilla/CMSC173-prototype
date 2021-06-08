import React from 'react';
import { Flex, Button, Box, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Present_1 from '../../assets/Present_1.png';
import Present_2 from '../../assets/Present_2.png';
import Present_3 from '../../assets/Present_3.png';
import Present_4 from '../../assets/Present_4.png';
import Present_5 from '../../assets/Present_5.png';

export const SideBar = () => {
	return (
		<Box
			w='20%'
			p='4'
			h='100%'
			width='40%'
			overflowY='auto'
			display={['none', 'none', 'none', 'block']}>
			<Flex direction='column' align='flex-start' width='95%'>
				<Flex w='100%' mb='4'>
					<Button leftIcon={<AddIcon />} size='lg' w='100%'>
						New
					</Button>
				</Flex>
				<Image
					src={Present_1}
					h='20%'
					border='solid 2px'
					borderColor='primary'
					borderRadius='base'
					mb='4'
				/>
				<Image src={Present_2} h='20%' mb='4' />
				<Image src={Present_3} h='20%' mb='4' />
				<Image src={Present_4} h='20%' mb='4' />
				<Image src={Present_5} h='20%' />
			</Flex>
		</Box>
	);
};
