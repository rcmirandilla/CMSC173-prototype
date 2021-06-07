import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { NavBar } from 'components/NavBar';
import { LandingPage } from './pages/LandingPage';
import theme from './utils/theme';

const AppRouter = () => {
	const [user, setUser] = useState({ email: '', password: '' });
	console.log(window.sidebar);
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Flex
					direction='column'
					align='center'
					justify='flex-start'
					width='100%'
					height='100%'
					position='fixed'
					overflow='auto'>
					<NavBar user={user} setUser={(value) => setUser(value)} />
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Redirect to='/' />
					</Switch>
				</Flex>
			</Router>
		</ChakraProvider>
	);
};

export default AppRouter;
