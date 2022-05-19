import React from "react";
import { GeneralContext } from "../../context/generalContext";

import { InputProps, InputStyle } from "../../types/input";

import {
  Container,
  InputContainer,
  InputContainerSmall,
  IconContainer,
  Input,
  InputSmall,
  TextError,
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
  isSmall = false,
  maxLength,
  required = false,
  searchFilter,
}) => {
  const { searchFilters } = React.useContext(GeneralContext);
  const [activeInput, setActiveInput] = React.useState("");
  const InputContainerSize = isSmall ? InputContainerSmall : InputContainer;
  const InputSize = isSmall ? InputSmall : Input;
  const activeElement = (data: string) => {
    setActiveInput(data);
  };

  return (
    <Container>
      <InputContainerSize
        hasChildren={!!children}
        isFocus={activeInput === name}
        hasError={!!error}
        iconStart={iconStart}
        style={{ ...inputStyle }}
      >
        <InputSize
          id={name}
          name={name}
          placeholder={placeholder}
          type={type === "date" ? "text" : type}
          hasChildren={!!children}
          onFocus={(e) => {
            activeElement(e.target.id);
            onFocus?.();
          }}
          {...register?.(name, {
            onChange: (e: any) => (
              (e.target.value = `${mask(e.target.value, type)}`),
              searchFilter?.({ ...searchFilters, searchInput: e.target.value })
            ),
            required,
          })}
          onBlur={() => activeElement("")}
          maxLength={maxLength}
        />
        <IconContainer iconStart={iconStart}>{children}</IconContainer>
      </InputContainerSize>
      {error && <TextError>* {error}</TextError>}
    </Container>
  );
};

export default InputComponent;