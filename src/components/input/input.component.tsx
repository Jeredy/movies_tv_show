import React from "react";

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
}) => {
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
					type={type}
					hasChildren={!!children}
					onFocus={(e) => {
						activeElement(e.target.id);
						onFocus();
					}}
					{...register}
					onBlur={() => activeElement("")}
				/>
				<IconContainer iconStart={iconStart}>{children}</IconContainer>
			</InputContainerSize>
			{error && <TextError>* {error}</TextError>}
		</Container>
	);
};

export default InputComponent;
