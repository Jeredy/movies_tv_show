import React from "react";

import { InputProps, InputStyle } from "../../types/input";

import {
  Container,
  TextAreaContainer,
  TextArea,
  TextError,
} from "./text-area.styles";

const TextAreaComponent: React.FC<InputProps & InputStyle> = ({
  name,
  placeholder,
  type,
  children,
  inputStyle,
  register,
  error,
  onFocus,
  required = false,
  maxLength,
}) => {
  const [activeInput, setActiveInput] = React.useState("");
  const activeElement = (data: string) => {
    setActiveInput(data);
  };

  return (
    <Container>
      <TextAreaContainer
        hasChildren={!!children}
        isFocus={activeInput === name}
        hasError={!!error}
        style={{ ...inputStyle }}
      >
        <TextArea
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          onFocus={(e: any) => {
            activeElement(e.target.id);
            onFocus?.();
          }}
          {...register?.(name, {
            onChange: (e: any) => e.target.value,
            required,
          })}
          onBlur={() => activeElement("")}
          maxLength={maxLength}
        />
      </TextAreaContainer>
      {error && <TextError>* {error}</TextError>}
    </Container>
  );
};

export default TextAreaComponent;
