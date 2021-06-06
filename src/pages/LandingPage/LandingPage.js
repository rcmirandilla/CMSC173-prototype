import React from 'react';
import bg from 'assets/images/cutie.png';
import { Stack, Text, Button, Image } from '@chakra-ui/react';
import {
	ButtonStyle,
	ButtonContainerStyle,
	TextStyle,
	LeftContainerStyle,
	RightContainerStyle,
	LandingPageStyle,
} from './theme';

export const LandingPage = () => {
	return (
		<Stack {...LandingPageStyle}>
			<Stack {...LeftContainerStyle}>
				<Image
					src={bg}
					alt='presentation_landing_picture'
					width={['sm', 'md', 'lg']}
				/>
			</Stack>
			<Stack {...RightContainerStyle}>
				<Text
					{...TextStyle}
					fontSize='24px'
					fontWeight='bolder'
					color='primary'>
					Discover and Create your own Presentation Slides through
					SlideIT!
				</Text>
				<Text {...TextStyle} fontSize='18px' color='secondary'>
					Over 50,000+ Teachers and Students use this application to
					create, share, and present their slides over a low metered
					network
				</Text>
				<Stack {...ButtonContainerStyle}>
					<Button {...ButtonStyle}>Get Started</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};
