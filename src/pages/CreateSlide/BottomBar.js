import React from 'react';
import { Flex, Button, Box, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Present_1 from '../../assets/Present_1.png';
import Present_2 from '../../assets/Present_2.png';
import Present_3 from '../../assets/Present_3.png';
import Present_4 from '../../assets/Present_4.png';
import Present_5 from '../../assets/Present_5.png';

export const BottomBar = () => {
	return (
		<Flex p='4' width='100%' justify='space-between'>
			<Box h='100%' mr='2'>
				<Button
					h='100%'
					alignText='center'
					leftIcon={<AddIcon />}
					bg='secondary'
					color='white'
					_hover={{
						bg: 'white',
						color: 'secondary',
					}}
				/>
			</Box>
			<Flex
				justify='flex-start'
				direction='row'
				align='stretch'
				width='100%'
				h='100%'
				overflowX='hidden'
				_hover={{
					overflowX: 'auto',
				}}>
				<Image
					src={Present_1}
					h='100%'
					border='solid 2px'
					borderColor='primary'
					borderRadius='base'
					mr='4'
				/>
				<Image src={Present_2} h='100%' mr='4' />
				<Image src={Present_3} h='100%' mr='4' />
				<Image src={Present_4} h='100%' mr='4' />
				<Image src={Present_5} h='100%' />
			</Flex>
		</Flex>
	);
};
