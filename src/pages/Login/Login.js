import React, { useState } from 'react';
import { ModalComp } from 'components/Modal';
import {
	ModalBody,
	VStack,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	InputLeftElement,
	Text,
	Button,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import {
	HeadingStyle,
	ButtonStyle1,
	ButtonStyle2,
	ButtonStyle3,
	NormalStyle,
} from './theme';

export const Login = ({ onSubmit, onToggle, toggle, ...props }) => {
	const [data, setData] = useState({ email: '', password: '' });
	const [showPassword, setShowPassword] = useState(false);

	return (
		<ModalComp
			toggle={toggle}
			onToggle={(value) => {
				onToggle(value);
			}}
			{...props}>
			<ModalBody p='5' mb='5'>
				<VStack spacing='3' fontFamily='body'>
					<Text {...HeadingStyle}>Login Form</Text>
					<InputGroup>
						<InputLeftElement
							value={data.email}
							pointerEvents='none'
							children={<EmailIcon color='gray.500' />}
						/>
						<Input
							onChange={(event) => {
								setData({
									...data,
									email: event.currentTarget.value,
								});
							}}
							placeholder='Enter Email Address'
						/>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							value={data.password}
							pointerEvents='none'
							children={<LockIcon color='gray.500' />}
						/>
						<Input
							pr='3rem'
							onChange={(event) => {
								setData({
									...data,
									password: event.currentTarget.value,
								});
							}}
							type={showPassword ? 'text' : 'password'}
							placeholder='Enter Password'
						/>
						<InputRightElement
							children={
								<Button
									{...ButtonStyle1}
									color='gray.500'
									onClick={() => {
										setShowPassword(!showPassword);
									}}>
									{!showPassword ? (
										<ViewIcon />
									) : (
										<ViewOffIcon />
									)}
								</Button>
							}
						/>
					</InputGroup>
				</VStack>
				<HStack
					justify='flex-start'
					align='flex-start'
					fontFamily='body'>
					<Button {...ButtonStyle1} color='secondary'>
						Forgot Password?
					</Button>
				</HStack>
				<VStack spacing='3'>
					<Button
						{...ButtonStyle2('normal')}
						onClick={() => {
							onSubmit(data);
							onToggle(false);
						}}>
						LOGIN
					</Button>
					<Text {...NormalStyle}>Or Login with</Text>
					<VStack spacing='1' width='100%'>
						<Button
							{...ButtonStyle2('darkblue')}
							leftIcon={<FaFacebookSquare />}>
							Sign in with Facebook
						</Button>
						<Button
							{...ButtonStyle2('red')}
							leftIcon={<FaGoogle />}>
							Sign in with Google
						</Button>
					</VStack>
					<HStack>
						<Text {...NormalStyle}>Don't have an account ?</Text>
						<Button {...ButtonStyle3} color='secondary'>
							Signup Now
						</Button>
					</HStack>
				</VStack>
			</ModalBody>
		</ModalComp>
	);
};
