export const HeadingStyle = {
	color: 'black',
	fontFamily: 'body',
	fontWeight: 'bolder',
	fontSize: '24px',
	mb: '4',
};

export const ButtonStyle1 = {
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

export const ButtonStyle2 = (type) => ({
	fontSize: '16px',
	color: 'white',
	bgColor: type === 'normal' ? 'primary' : type,
	border: '2px solid white',
	p: 5,
	width: '100%',
	_hover: {
		borderShadow: 'none',
	},
	_focus: { borderShadow: 'none' },
	_focusWithin: { borderShadow: 'none' },
	_active: {
		boxShadow: 'none',
		border: '3px solid white',
	},
});

export const ButtonStyle3 = {
	variant: 'unstyled',
	bgColor: 'transparent',
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

export const NormalStyle = {
	color: 'black',
	fontFamily: 'body',
	fontWeight: 'bold',
	fontSize: '16px',
};
