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
		<Flex h='100%' width='40%' display={['none', 'none', 'none', 'block']}>
			<Box w='100%' h='10%' mb='2' pr='4'>
				<Button
					leftIcon={<AddIcon />}
					size='lg'
					w='100%'
					bg='secondary'
					color='white'
					_hover={{
						bg: 'white',
						color: 'secondary',
					}}>
					New
				</Button>
			</Box>
			<Flex
				direction='column'
				align='flex-start'
				width='100%'
				h='90%'
				pr='4'
				overflowY='hidden'
				_hover={{
					overflowY: 'auto',
				}}>
				<Image
					src={Present_1}
					w='100%'
					border='solid 2px'
					borderColor='primary'
					borderRadius='base'
					mb='4'
				/>
				<Image src={Present_2} w='100%' mb='4' />
				<Image src={Present_3} w='100%' mb='4' />
				<Image src={Present_4} w='100%' mb='4' />
				<Image src={Present_5} w='100%' />
			</Flex>
		</Flex>
	);
};
