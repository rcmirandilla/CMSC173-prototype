import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { NavBar } from 'components/NavBar';
import { LandingPage } from './pages/LandingPage';
import theme from './utils/theme';

const AppRouter = () => {
	const [user, setUser] = useState({ email: '', password: '' });
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Flex
					height='100vh'
					direction='column'
					align='flex-start'
					justify='flex-start'>
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
