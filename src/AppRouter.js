import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { NavBar } from 'components/NavBar';
import { SlideList } from 'pages/SlideList'
import { LandingPage } from './pages/LandingPage';
import { CreateSlide } from './pages/CreateSlide'
import { PresentSlide } from './pages/PresentSlide'
import { UploadSlide } from './pages/UploadSlide'
import theme from './utils/theme';

const AppRouter = () => {
	const [user, setUser] = useState({ email: 's', password: 's' });
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
						<Route exact path='/' component={user.email === '' && user.password === '' ? LandingPage : SlideList} />
						<Route exact path='/create' component={CreateSlide} />
						<Route exact path='/present' component={PresentSlide} />
						<Route exact path='/upload' component={UploadSlide} />
						<Redirect to='/' />
					</Switch>
				</Flex>
			</Router>
		</ChakraProvider>
	);
};

export default AppRouter;
