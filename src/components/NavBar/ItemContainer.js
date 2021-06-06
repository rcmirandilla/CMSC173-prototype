import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { ItemLink } from './ItemLink';
import { ItemContainerStyle, ItemMainContainerStyle } from './theme';

export const ItemContainer = ({ isOpen, items, ...props }) => {
	return (
		<Box {...ItemMainContainerStyle(isOpen)}>
			<Stack {...ItemContainerStyle} {...props}>
				{items.map((item, index) => (
					<ItemLink key={index} link={item.link}>
						{item.header}
					</ItemLink>
				))}
			</Stack>
		</Box>
	);
};
