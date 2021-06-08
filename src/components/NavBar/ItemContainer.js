import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { ItemLink } from './ItemLink';
import { ItemContainerStyle, ItemMainContainerStyle } from './theme';

export const ItemContainer = ({ isOpen, items, ...props }) => {
	return (
		<Box {...ItemMainContainerStyle(isOpen)} {...props}>
			<Stack {...ItemContainerStyle}>
				{items.map((item, index) => (
					<ItemLink
						key={index}
						w={isOpen[1] === 'type2' ? '100%' : 'none'}
						link={item.link}
						_hover={
							isOpen[0] && isOpen[1] === 'type2'
								? { bgColor: 'white', color: 'primary' }
								: {}
						}>
						{item.header}
					</ItemLink>
				))}
			</Stack>
		</Box>
	);
};
