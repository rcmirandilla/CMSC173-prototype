export const ItemToggleStyle = {
	display: { base: 'block', md: 'none' },
};

export const ItemContainerStyle = {
	spacing: 2,
	align: 'center',
	justify: ['center', 'flex-end', 'flex-end', 'flex-end'],
	direction: 'row',
	pt: [2, 2, 0, 0],
	mr: [2, 2, 4, 4],
};

export const ItemMainContainerStyle = (isOpen) => ({
	display: { base: isOpen ? 'block' : 'none', md: 'block' },
	flexBasis: { base: '100%', md: 'auto' },
});

export const NavBarContainerStyle = (scrollY) => ({
	as: 'nav',
	align: ['flex-start', 'flex-start', 'center', 'center'],
	justify: 'space-between',
	wrap: 'wrap',
	width: '100%',
	p: ['.3rem', '.5rem', '1rem', '1rem'],
	bg: 'transparent',
	color: 'primary',
	fontFamily: 'heading_1',
	fontWeight: 'bold',
	position: scrollY > 1 ? 'sticky' : 'none',
	top: 0,
	zIndex: 999,
});

export const ItemLinkStyle = {
	fontSize: '16px',
	bgColor: 'transparent',
	p: [2, 2, 3, 3],
	_hover: {
		bgColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
	},
	_focusWithin: {
		boxShadow: 'none',
	},
	_active: {
		border: 'none',
	},
	cursor: 'pointer',
};

export const LogInStyle = (isItemsOpen) => ({
	fontSize: '16px',
	color: isItemsOpen ? 'primary' : 'white',
	bgColor: isItemsOpen ? 'white' : 'primary',
	border: '2px solid white',
	p: 3,
	_hover: {
		borderShadow: 'none',
	},
	_focus: { borderShadow: 'none' },
	_focusWithin: { borderShadow: 'none' },
	_active: {
		boxShadow: 'none',
		border: '3px solid white',
	},
	cursor: 'pointer',
	mr: [2, 2, 0, 0],
});

export const NavContainerStyle = (isItemsOpen) => ({
	align: ['flex-end', 'flex-end', 'center', 'center'],
	direction: [
		isItemsOpen ? 'column-reverse' : 'row',
		isItemsOpen ? 'column-reverse' : 'row',
		'row',
		'row',
	],
	justify: [
		isItemsOpen ? 'flex-end' : 'center',
		isItemsOpen ? 'flex-end' : 'center',
		'flex-end',
		'flex-end',
	],
});

export const MenuItemStyle = {
	color: 'primary',
	fontSize: '18px',
	_focus: {
		bgColor: 'primary',
		color: 'white',
	},
	_hover: {
		bgColor: 'primary',
		color: 'white',
	},
};
