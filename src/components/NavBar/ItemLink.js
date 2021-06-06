import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ItemLinkStyle } from './theme';

export const ItemLink = ({ link, children, ...props }) => {
	const history = useHistory();

	return (
		<Button
			{...ItemLinkStyle}
			{...props}
			onClick={() => {
				history.push(link);
			}}>
			{children}
		</Button>
	);
};
