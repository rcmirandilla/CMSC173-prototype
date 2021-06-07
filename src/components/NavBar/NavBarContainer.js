import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NavBarContainerStyle } from './theme';

export const NavBarContainer = ({ children, ...props }) => {
	return (
		<Flex {...NavBarContainerStyle} {...props}>
			{children}
		</Flex>
	);
};
