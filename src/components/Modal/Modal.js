import React, { useRef, useEffect } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	useDisclosure,
	Heading,
} from '@chakra-ui/react';
import { HeadingStyle, ModalCloseButtonStyle } from './theme';

export const ModalComp = ({ toggle, onToggle, header, children, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef();
	useEffect(() => {
		if (toggle) {
			onOpen();
		}
	}, [toggle, isOpen, onOpen]);
	return (
		<Modal
			initialFocusRef={initialRef}
			isOpen={isOpen}
			onClose={() => {
				onClose();
				onToggle(false);
			}}
			isCentered
			{...props}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Heading {...HeadingStyle}>{header}</Heading>
				</ModalHeader>
				<ModalCloseButton {...ModalCloseButtonStyle} />
				{children}
			</ModalContent>
		</Modal>
	);
};
