import React from "react";
import { useNavigate } from "react-router-dom";

import { AlertProps } from "../../types/alert";
import Button from "../button/button.components";

import {
  Container,
  Box,
  Text,
  IconContainer,
  Icon,
  TrashIcon,
  TextContainer,
} from "./alert.styles";

const Alert: React.FC<AlertProps> = ({
  text,
  buttonText,
  buttonLink,
  isCaution = false,
  isLoading = false,
  clickFunction,
  cautionFunction,
}) => {
  const navigate = useNavigate();
  const buttonProps = isCaution ? { customColor: "#F24C4C" } : false;
  const texts = text.split(":");

  const goTo = () => {
    /* eslint-disable */
    return buttonLink
      ? navigate(buttonLink!)
      : isCaution
      ? cautionFunction?.()
      : clickFunction?.();
    /* eslint-enable */
  };

  return (
    <Container>
      <Box isCaution={isCaution}>
        <IconContainer>{isCaution ? <TrashIcon /> : <Icon />}</IconContainer>
        <Text>{texts[0]}:</Text>
        {isCaution && texts[1] && (
          <Text style={{ fontWeight: 700 }}>{texts[1]}</Text>
        )}
        <Button
          title={buttonText}
          clickFunction={goTo}
          {...buttonProps}
          isLoading={isLoading}
        />
        {!isLoading && isCaution && (
          <TextContainer onClick={() => clickFunction?.()}>
            <Text>Cancelar</Text>
          </TextContainer>
        )}
      </Box>
    </Container>
  );
};

export default Alert;
