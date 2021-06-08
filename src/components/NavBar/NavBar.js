import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Icon, Spacer } from '@chakra-ui/react';
import { NavBarContainer } from './NavBarContainer';
import { ItemToggle } from './ItemToggle';
import { ItemContainer } from './ItemContainer';
import { AvatarMenu } from './AvatarMenu';
import { Login } from 'pages/Login';
import { LogInStyle, ItemLinkStyle } from './theme';
import { ReactComponent as Logo1 } from '../../assets/1.svg';
import { ReactComponent as Logo2 } from '../../assets/2.svg';

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
];

export const NavBar = ({ user, setUser, ...props }) => {
	const history = useHistory();
	const location = useLocation();
	const [loginToggle, setLoginToggle] = useState(false);
	const [isItemsOpen, setIsItemsOpen] = useState(false);
	return location.pathname !== '/present' ? (
		<NavBarContainer
			{...props}
			align={!isItemsOpen ? 'center' : ''}
			bg={!isItemsOpen ? 'white' : 'primary'}
			color={!isItemsOpen ? 'primary' : 'white'}>
			<ItemToggle
				toggle={() => setIsItemsOpen(!isItemsOpen)}
				isOpen={isItemsOpen}
			/>
			<Button
				alignSelf='flex-end'
				{...ItemLinkStyle}
				onClick={() => {
					history.push('/');
				}}>
				<Icon
					align='center'
					as={isItemsOpen ? Logo2 : Logo1}
					w='120px'
					h='120px'
				/>
			</Button>
			<Spacer />
			<ItemContainer
				display={{ base: 'none', md: 'block' }}
				isOpen={[isItemsOpen, 'type1']}
				items={NavLinks}
			/>
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
			<ItemContainer isOpen={[isItemsOpen, 'type2']} items={NavLinks} />
			<Login
				onSubmit={(value) => setUser(value)}
				toggle={loginToggle}
				onToggle={(value) => {
					setLoginToggle(value);
				}}
			/>
		</NavBarContainer>
	) : (
		''
	);
};
