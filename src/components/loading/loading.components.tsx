import React from "react";
import ReactLoading from "react-loading";
import { ww } from "../../styles/responsive";
import { LoadingProps } from "../../types/loading";
import { Container, Text } from "./loading.styles";

const Loading: React.FC<LoadingProps> = ({
  type = "spin",
  color = "#fff",
  text = "Validando dados...",
}) => {
  return (
    <Container>
      <ReactLoading type={type} color={color} height={ww(11)} width={ww(11)} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Loading;
