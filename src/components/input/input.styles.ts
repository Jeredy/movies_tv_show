import styled, { css } from "styled-components";

import { IconContainerProps, InputContainerProps } from "../../types/input";

const inputContainerSize = css<InputContainerProps & IconContainerProps>`
	height: 40px;
	radius: 6px;
	width: 289px;
	max-width: 289px;
	font-size: 16px;
	color: #00000070;
	padding-left: ${({ iconStart }) => (iconStart ? "40px" : "10px")};
	background-color: #f5f5f5;
	position: relative;
	border-radius: 6px;
	margin-bottom: 5px;
	border: ${({ isFocus, hasError }) =>
		hasError ? "1px solid #f31" : isFocus ? "1px solid #7C7C7C" : "none"};
`;

const inputStyle = css<InputContainerProps>`
	height: 40px;
	font-size: 16px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 13px;
`;

export const InputContainer = styled.div<
	InputContainerProps & IconContainerProps
>`
	${inputContainerSize}
	width: 289px;
	max-width: 289px;
	padding-left: ${({ iconStart }) => (iconStart ? "40px" : "10px")};
	border: ${({ isFocus, hasError }) =>
		hasError ? "1px solid #f31" : isFocus ? "1px solid #7C7C7C" : "none"};
`;

export const InputContainerSmall = styled.div<
	InputContainerProps & IconContainerProps
>`
	${inputContainerSize}

	width: 109px;
	max-width: 109px;
	padding-left: ${({ iconStart }) => (iconStart ? "40px" : "10px")};
	background-color: #fff;
	border: ${({ isFocus, hasError }) =>
		hasError ? "1px solid #f31" : isFocus ? "1px solid #7C7C7C" : "none"};
`;

export const Input = styled.input<InputContainerProps>`
	${inputStyle}
	width: ${({ hasChildren }) => (hasChildren ? 240 : 270)}px;
`;

export const InputSmall = styled.input<InputContainerProps>`
	${inputStyle}
	width: ${({ hasChildren }) => (hasChildren ? 60 : 90)}px;
`;

export const IconContainer = styled.div<IconContainerProps>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	bottom: 0;
	right: ${({ iconStart }) => (iconStart ? "none" : "0.6rem")};
	left: ${({ iconStart }) => (iconStart ? "0.6rem" : "none")};
`;

export const TextError = styled.p`
	font-size: 11px;
	color: #f31;
`;
