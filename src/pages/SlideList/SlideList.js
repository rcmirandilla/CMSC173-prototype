import React, { useState } from 'react';
import { Heading, Flex, VStack, Image, Text, Box } from '@chakra-ui/react';
import { initialData } from './index';
import { useHistory } from 'react-router-dom';

export const SlideList = () => {
	const [data] = useState(initialData);
	const history = useHistory();

	return (
		<VStack p='4'>
			{/* Grid Slides */}
			<Flex
				p='4'
				direction='row'
				wrap='wrap'
				justify='center'
				align='center'>
				{data.map((item, i) => (
					<>
						<Box
							width={['xs', 'md', 'xl', 'lg']}
							key={i}
							p='4'
							transition='0.5s'
							_hover={{ bg: 'whiteAlpha.800', cursor: 'pointer' }}
							onClick={() => history.push('/present')}>
							<Image src={item.image} objectFit='fill' />
							<Heading mt='2' fontSize='sm'>
								{item.title}
							</Heading>
							<Text fontSize='xs'>{`Last Opened ${item.date.toDateString()}`}</Text>
						</Box>
					</>
				))}
			</Flex>
		</VStack>
	);
};
