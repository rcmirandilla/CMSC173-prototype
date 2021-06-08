import React from 'react';
import {
	Heading,
	HStack,
	Flex,
	Button,
	IconButton,
	Image,
} from '@chakra-ui/react';
import {
	EditIcon,
	QuestionIcon,
	ChatIcon,
	CheckCircleIcon,
	TimeIcon,
	AttachmentIcon,
	StarIcon,
} from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import Present_1 from '../../assets/Present_1.png';
import { SideBar } from './SideBar';
import { BottomBar } from './BottomBar';

export const CreateSlide = () => {
	const history = useHistory();

	return (
		<Flex
			width='90%'
			maxHeight='80%'
			direction='column'
			align='center'
			justify='center'>
			<HStack
				align='center'
				w='100%'
				p='4'
				justify={['center', 'center', 'center', 'flex-start']}
				spacing='4'
				mb='2'>
				<Heading fontSize='200%'>Untitled</Heading>
				<Button
					bg='primary'
					color='white'
					_hover={{
						bg: 'white',
						color: 'primary',
					}}
					leftIcon={<StarIcon />}
					onClick={() => history.push('/present')}>
					Present
				</Button>
			</HStack>
			<Flex align='flex-start' height='80%' width='100%'>
				<SideBar />
				<Flex
					w='100%'
					align='flex-start'
					justify='flex-start'
					height='100%'
					wrap={['wrap', 'wrap', 'wrap', 'unset']}>
					<Flex
						h={['40%', '65%', '85%', '100%']}
						justify='center'
						mx={['0', '0', '4', '4']}>
						<Image src={Present_1} objectFit='fill' />
					</Flex>
					<Flex
						w={['100%', '100%', '100%', '8%']}
						align='flex-start'
						height={['10%', '10%', '15%', '100%']}
						mx={[4, 4, 4, 0]}
						my={[5, 5, 5, 0]}>
						<Flex
							height={['', '', '100%', '100%']}
							direction={['row', 'row', 'row', 'column']}
							align='center'
							textAlign='center'
							w='100%'
							justify={{ base: 'center', sm: 'center' }}
							color='primary'
							borderRadius='base'
							bg='white'>
							{/* Textbox */}
							<IconButton variant='ghost' icon={<EditIcon />} />
							{/* Images/File */}
							<IconButton
								variant='ghost'
								icon={<AttachmentIcon />}
							/>
							{/* Quiz */}
							<IconButton
								variant='ghost'
								icon={<QuestionIcon />}
							/>
							{/* Question */}
							<IconButton variant='ghost' icon={<ChatIcon />} />
							{/* Poll */}
							<IconButton
								variant='ghost'
								icon={<CheckCircleIcon />}
							/>
							{/* Timed Quiz */}
							<IconButton variant='ghost' icon={<TimeIcon />} />
						</Flex>
					</Flex>
					<Flex display={['flex', 'flex', 'flex', 'none']}>
						<BottomBar />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
