import React from "react";
import { useNavigate } from "react-router-dom";

import { AlertProps } from "../../types/alert";
import Button from "../button/button.components";

import { Container, Box, Text, IconContainer, Icon } from "./alert.styles";

const Alert: React.FC<AlertProps> = ({
	text,
	buttonText,
	buttonLink,
	clickFunction,
}) => {
	const navigate = useNavigate();

	const goTo = () => {
		return buttonLink ? navigate(buttonLink!) : clickFunction?.();
	};

	return (
		<Container>
			<Box>
				<IconContainer>
					<Icon />
				</IconContainer>
				<Text>{text}</Text>
				<Button title={buttonText} clickFunction={goTo} />
			</Box>
		</Container>
	);
};

export default Alert;
