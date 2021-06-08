import {
	Flex,
	IconButton,
	Spacer,
	Tag,
	Heading,
	useToast,
	Image,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { CloseIcon, LinkIcon } from '@chakra-ui/icons';
import Present_1 from '../../assets/Present_1.png';
import Present_2 from '../../assets/Present_2.png';
import Present_3 from '../../assets/Present_3.png';
import Present_4 from '../../assets/Present_4.png';
import Present_5 from '../../assets/Present_5.png';
import { useHistory } from 'react-router-dom';

const slides = [Present_1, Present_2, Present_3, Present_4, Present_5];

export const PresentSlide = () => {
	const toast = useToast();
	const history = useHistory();
	const [num, setNum] = useState(0);

	useEffect(() => {
		function onKeyup(e) {
			if (e.key === 'ArrowLeft') {
				setNum((prevState) =>
					prevState - 1 === -1 ? prevState : prevState - 1
				);
			} else if (e.key === 'ArrowRight') {
				setNum((prevState) =>
					prevState + 1 === 5 ? prevState : prevState + 1
				);
			}
		}
		window.addEventListener('keyup', onKeyup);
		return () => window.removeEventListener('keyup', onKeyup);
	}, [num]);

	return (
		<Flex w='100%' h='100%' align='center' justify='center'>
			<Flex
				alignSelf='flex-start'
				align='center'
				w='100%'
				p='8'
				position='fixed'
				transition='0.3s'
				_hover={{ bg: 'white' }}>
				<IconButton
					onClick={() =>
						toast({
							title: 'Link Copied',
							duration: 3000,
							description:
								'http://slideit.netlify.com/Visual-Arts-Lesson',
						})
					}
					variant='ghost'
					icon={<LinkIcon />}
				/>
				<Spacer />
				<Tag size='sm' px='8' h='5vh'>
					<Heading fontSize='sm' fontWeight='semibold'>{`${
						num + 1
					} / 5`}</Heading>
				</Tag>
				<Spacer />
				<IconButton
					onClick={() => history.goBack()}
					variant='ghost'
					icon={<CloseIcon />}
				/>
			</Flex>
			<Image src={slides[num]} w='80%' />
		</Flex>
	);
};
