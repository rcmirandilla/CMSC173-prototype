import React, { useState } from 'react';
import { Stack, Button, Avatar } from '@chakra-ui/react';
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

export const NavBar = ({ user, setUser, ...props }) => {
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
					{user.email === '' && user.password === '' ? (
						<Button
							{...LogInStyle(isItemsOpen)}
							onClick={() => {
								setLoginToggle(true);
							}}>
							Log In
						</Button>
					) : (
						<Avatar
							name='Dan Abrahmov'
							src='https://bit.ly/dan-abramov'
							cursor='pointer'
							onClick={() => {}}
						/>
					)}
					<ItemToggle
						toggle={() => setIsItemsOpen(!isItemsOpen)}
						isOpen={isItemsOpen}
					/>
				</Stack>
			</Stack>
			<Login
				onSubmit={(value) => setUser(value)}
				toggle={loginToggle}
				onToggle={(value) => {
					setLoginToggle(value);
				}}
			/>
		</NavBarContainer>
	);
};
