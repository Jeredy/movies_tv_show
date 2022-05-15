import React from "react";

import { ButtonProps } from "../../types/button";
import Loading from "../loading/loading.components";

import { PrimaryContainer, SecondaryContainer, Text } from "./button.styles";

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  clickFunction,
  isLoading = false,
  children,
  invertedColor,
}) => {
  const Container = invertedColor ? SecondaryContainer : PrimaryContainer;

  return (
    <Container
      type={type}
      onClick={clickFunction}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {children}
      {isLoading ? <Loading /> : <Text>{title}</Text>}
    </Container>
  );
};

export default Button;
