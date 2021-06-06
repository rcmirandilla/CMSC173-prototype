import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ItemToggleStyle, ItemLinkStyle } from './theme';

export const ItemToggle = ({ toggle, isOpen }) => {
	return (
		<Button {...ItemToggleStyle} {...ItemLinkStyle} onClick={toggle}>
			{isOpen ? (
				<AiOutlineClose style={{ fontSize: '24px' }} />
			) : (
				<AiOutlineMenu style={{ fontSize: '24px' }} />
			)}
		</Button>
	);
};
