import React from "react";

import { InputProps, InputStyle } from "../../types/input";

import { Container, InputContainer, Input, TextError } from "./input.styles";

const InputComponent: React.FC<InputProps & InputStyle> = ({
  name,
  placeholder,
  type,
  children,
  inputStyle,
  register,
  error,
  onFocus,
  maxLength,
  required = false,
  width,
  value,
}) => {
  const [activeInput, setActiveInput] = React.useState("");
  const [innerValue, setInnerValue] = React.useState("");
  const activeElement = (data: string) => {
    setActiveInput(data);
  };

  return (
    <Container>
      <InputContainer
        hasChildren={!!children}
        isFocus={activeInput === name}
        hasError={!!error}
        style={{ ...inputStyle }}
        width={width}
      >
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          hasChildren={!!children}
          width={width}
          onFocus={(e) => {
            activeElement(e.target.id);
            onFocus?.();
          }}
          {...register?.(name, {
            onChange: (e: any) => (
              (e.target.value = e.target.value), setInnerValue(e.target.value)
            ),
            value: value,
            required: required,
          })}
          onBlur={() => activeElement("")}
          maxLength={maxLength}
        />
      </InputContainer>
      {error && <TextError>* {error}</TextError>}
    </Container>
  );
};

export default InputComponent;
