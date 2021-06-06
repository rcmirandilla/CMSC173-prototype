import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { NavBarContainerStyle } from './theme';

export const NavBarContainer = ({ children, ...props }) => {
	const [scrollY, setScrollY] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollY(window.scrollY);
		});
		return () => {
			window.removeEventListener('scroll', () => {
				setScrollY(window.scrollY);
			});
		};
	}, []);

	return (
		<Flex {...NavBarContainerStyle(scrollY)} {...props}>
			{children}
		</Flex>
	);
};
