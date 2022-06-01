import React from "react";
import { GeneralContext } from "../../context/generalContext";

import { InputProps, InputStyle } from "../../types/input";

import {
  Container,
  InputContainerPrimary,
  InputContainerSecondary,
  IconContainer,
  Input,
  TextError,
  Label,
} from "./input.styles";
import mask from "./mask";

const InputComponent: React.FC<InputProps & InputStyle> = ({
  name,
  placeholder,
  type,
  children,
  iconStart = false,
  inputStyle,
  register,
  error,
  onFocus,
  maxLength,
  required = false,
  searchFilter,
  width,
  isSecondary,
  value,
}) => {
  const [activeInput, setActiveInput] = React.useState("");
  const [innerValue, setInnerValue] = React.useState("");
  const activeElement = (data: string) => {
    setActiveInput(data);
  };
  const InputContainer = isSecondary
    ? InputContainerSecondary
    : InputContainerPrimary;

  return (
    <Container>
      {isSecondary && (
        <Label showLabel={!!innerValue.length || !!value?.length}>
          {placeholder}
        </Label>
      )}
      <InputContainer
        hasChildren={!!children}
        isFocus={activeInput === name}
        hasError={!!error}
        iconStart={iconStart}
        style={{ ...inputStyle }}
        width={width}
      >
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type === "date" ? "text" : type}
          hasChildren={!!children}
          width={width}
          onFocus={(e) => {
            activeElement(e.target.id);
            onFocus?.();
          }}
          {...register?.(name, {
            onChange: (e: any) => (
              (e.target.value = `${mask(e.target.value, type)}`),
              setInnerValue(e.target.value)
            ),
            value: value,
            required: required,
          })}
          onBlur={() => activeElement("")}
          maxLength={maxLength}
        />
        <IconContainer iconStart={iconStart}>{children}</IconContainer>
      </InputContainer>
      {error && <TextError>* {error}</TextError>}
    </Container>
  );
};

export default InputComponent;
