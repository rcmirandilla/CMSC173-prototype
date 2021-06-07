import React from 'react';
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { MenuItemStyle } from './theme';

export const AvatarMenu = ({ ...props }) => {
	return (
		<Menu {...props}>
			<MenuButton
				as={Avatar}
				aria-label='Options'
				icon={
					<Avatar
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
						cursor='pointer'
					/>
				}
				variant='outline'
			/>
			<MenuList>
				<MenuItem
					icon={<IoSettingsOutline style={{ fontSize: '18px' }} />}
					{...MenuItemStyle}>
					Account Settings
				</MenuItem>
				<MenuItem
					icon={<IoLogOutOutline style={{ fontSize: '18px' }} />}
					{...MenuItemStyle}>
					Logout
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
