import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Stack, Button, Icon } from '@chakra-ui/react';
import { NavBarContainer } from './NavBarContainer';
import { ItemToggle } from './ItemToggle';
import { ItemContainer } from './ItemContainer';
import { AvatarMenu } from './AvatarMenu';
import { Login } from 'pages/Login';
import { LogInStyle, NavContainerStyle, ItemLinkStyle } from './theme';
import { ReactComponent as Logo } from '../../assets/1.svg'

const NavLinks = [
	{
		header: 'Create',
		link: '/create',
	},
	{
		header: 'Upload',
		link: '/upload',
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
	const history = useHistory();
	const location = useLocation()
	const [loginToggle, setLoginToggle] = useState(false);
	const [isItemsOpen, setIsItemsOpen] = useState(false);
	return (
		location.pathname !== '/present' ? 
		<NavBarContainer
			{...props}
			align={!isItemsOpen ? 'center' : ''}
			bg={!isItemsOpen ? 'white' : 'primary'}
			color={!isItemsOpen ? 'primary' : 'white'}>
			<Button
				{...ItemLinkStyle}
				onClick={() => {
					history.push('/');
				}}>
				<Icon as={Logo} w="120px" h="120px"/>
			</Button>
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
						<AvatarMenu />
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
		: ''
	);
};
