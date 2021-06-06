import React, { useState } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { NavBarContainer } from './NavBarContainer';
import { ItemToggle } from './ItemToggle';
import { ItemContainer } from './ItemContainer';
import { Login } from 'pages/Login';
import { LogInStyle, NavContainerStyle, ItemLinkStyle } from './theme';

const NavLinks = [
	{
		header: 'Create',
		link: '/create',
	},
	{
		header: 'Discover',
		link: '/discover',
	},
	{
		header: 'About',
		link: '/about',
	},
];

export const NavBar = (props) => {
	const [loginToggle, setLoginToggle] = useState(false);
	const [isItemsOpen, setIsItemsOpen] = useState(false);

	return (
		<NavBarContainer
			{...props}
			align={!isItemsOpen ? 'center' : ''}
			bg={!isItemsOpen ? 'white' : 'primary'}
			color={!isItemsOpen ? 'primary' : 'white'}>
			<Button {...ItemLinkStyle}>SlideIT!</Button>
			<Stack {...NavContainerStyle(isItemsOpen)}>
				<ItemContainer isOpen={isItemsOpen} items={NavLinks} />
				<Stack direction='row' justify='flex-end' align='center'>
					<Button
						{...LogInStyle(isItemsOpen)}
						onClick={() => {
							setLoginToggle(true);
						}}>
						Log In
					</Button>
					<ItemToggle
						toggle={() => setIsItemsOpen(!isItemsOpen)}
						isOpen={isItemsOpen}
					/>
				</Stack>
			</Stack>
			<Login
				toggle={loginToggle}
				onToggle={(value) => {
					setLoginToggle(value);
				}}
			/>
		</NavBarContainer>
	);
};
