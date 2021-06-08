export const ItemToggleStyle = {
	display: { base: 'block', md: 'none' },
};

export const ItemContainerStyle = {
	spacing: 2,
	align: 'center',
	justify: ['center', 'center', 'flex-end', 'flex-end'],
	direction: ['column', 'column', 'row', 'row'],
	pt: [4, 4, 0, 0],
	mr: [0, 0, 4, 4],
};

export const ItemMainContainerStyle = (isOpen) => ({
	display: {
		base: isOpen[0] && isOpen[1] === 'type2' ? 'block' : 'none',
		md: isOpen[1] === 'type2' ? 'none' : 'block',
	},
	flexBasis: { base: '100%', md: 'auto' },
});

export const NavBarContainerStyle = {
	as: 'nav',
	align: 'center',
	justify: 'space-between',
	width: '100%',
	wrap: 'wrap',
	p: ['.3rem', '.5rem', '1rem', '1rem'],
	bg: 'transparent',
	color: 'primary',
	fontFamily: 'heading_1',
	fontWeight: 'bold',
	position: 'sticky',
	top: 0,
	zIndex: 99999999999,
};

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
