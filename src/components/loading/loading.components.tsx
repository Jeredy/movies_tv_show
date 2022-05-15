import React from "react";
import ReactLoading from "react-loading";
import { LoadingProps } from "../../types/loading";
import { Container, Text } from "./loading.styles";

const Loading: React.FC<LoadingProps> = ({
	type = "spin",
	color = "#fff",
	text = "Validando dados...",
}) => {
	return (
		<Container>
			<ReactLoading type={type} color={color} height={20} width={20} />
			<Text>{text}</Text>
		</Container>
	);
};

export default Loading;
