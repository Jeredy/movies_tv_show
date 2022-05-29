import React from "react";

import { ButtonProps } from "../../types/button";
import Loading from "../loading/loading.components";

import {
	PrimaryContainer,
	SecondaryContainer,
	CustomContainer,
	Text,
} from "./button.styles";

const Button: React.FC<ButtonProps> = ({
	type,
	title,
	clickFunction,
	isLoading = false,
	children,
	inverterColor = false,
	customColor,
}) => {
	/* eslint-disable */
	const Container = customColor
		? CustomContainer
		: inverterColor
		? SecondaryContainer
		: PrimaryContainer;
	/* eslint-enable */

	return (
		<Container
			type={type}
			onClick={clickFunction}
			disabled={isLoading}
			isLoading={isLoading}
			customColor={customColor}
		>
			{children}
			{isLoading ? (
				<Loading color={customColor === "#EFD700" ? "#383838" : "#fff"} />
			) : (
				<Text inverterColor={inverterColor}>{title}</Text>
			)}
		</Container>
	);
};

export default Button;
