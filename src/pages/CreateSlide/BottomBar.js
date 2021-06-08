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
		<Box p='4' width='100%' overflowX='auto'>
			<Flex direction='row' align='center' width='100%'>
				<Image
					src={Present_1}
					h='20%'
					border='solid 2px'
					borderColor='primary'
					borderRadius='base'
					mr='4'
				/>
				<Image src={Present_2} h='20%' mr='4' />
				<Image src={Present_3} h='20%' mr='4' />
				<Image src={Present_4} h='20%' mr='4' />
				<Image src={Present_5} h='20%' mr='4' />
				<Flex w='100%'>
					<Button leftIcon={<AddIcon />} size='lg' mr='4'>
						New
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
