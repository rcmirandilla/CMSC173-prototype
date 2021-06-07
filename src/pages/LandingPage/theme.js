export const ButtonStyle = {
	fontSize: '18px',
	fontWeight: 'bolder',
	color: 'primary',
	bgColor: 'white',
	_hover: {
		borderShadow: 'none',
	},
	_focus: { borderShadow: 'none' },
	_focusWithin: { borderShadow: 'none' },
	_active: {
		boxShadow: 'none',
		border: '4px solid white',
	},
	cursor: 'pointer',
};

export const ButtonContainerStyle = {
	direction: ['column', 'row', 'row'],
	wrap: 'wrap',
};

export const TextStyle = {
	width: '100%',
	textAlign: ['center', 'center', 'center', 'left'],
	fontFamily: 'body',
};

export const RightContainerStyle = {
	spacing: 5,
	direction: 'column',
	width: ['100%', '100%', '100%', '50%'],
	align: ['center', 'center', 'center', 'flex-start'],
	justify: ['center', 'center', 'center', 'flex-start'],
	padding: ['1rem', '1rem', '1rem', '2rem'],
};

export const LeftContainerStyle = {
	direction: 'column',
	width: ['100%', '100%', '100%', '50%'],
	align: 'center',
	justify: 'center',
};

export const LandingPageStyle = {
	direction: 'row',
	padding: ['1rem', '2rem', '3rem', '3.5rem'],
	width: '100%',
	height: '100%',
	justify: 'center',
	align: ['flex-start', 'flex-start', 'center', 'center'],
	wrap: ['wrap', 'wrap', 'wrap', 'nowrap'],
};
