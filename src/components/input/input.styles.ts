import styled, { css } from "styled-components";
import { ww } from "../../styles/responsive";

import { IconContainerProps, InputContainerProps } from "../../types/input";

const inputContainerSize = css<InputContainerProps & IconContainerProps>`
  height: ${ww(23)}px;
  radius: ${ww(3)}px;
  width: ${ww(165)}px;
  font-size: ${ww(10)}px;
  color: #00000070;
  padding-left: ${({ iconStart }) =>
    iconStart ? `${ww(23)}px;` : `${ww(6)}px;`};
  background-color: #f5f5f5;
  position: relative;
  border-radius: ${ww(3)}px;
  margin-bottom: ${ww(3)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #C6C2DE" : "none"};
`;

const inputStyle = css<InputContainerProps>`
  height: ${ww(23)}px;
  font-size: ${ww(10)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${ww(7)}px;
`;

export const InputContainer = styled.div<
  InputContainerProps & IconContainerProps
>`
  ${inputContainerSize}
  width: ${ww(165)}px;
  max-width: ${ww(165)}px;
  padding-left: ${({ iconStart }) => (iconStart ? `${ww(23)}` : `${ww(6)}`)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #C6C2DE" : "none"};
`;

export const InputContainerSmall = styled.div<
  InputContainerProps & IconContainerProps
>`
  ${inputContainerSize}
  width: ${ww(62)}px;
  max-width: ${ww(62)}px;
  padding-left: ${({ iconStart }) => (iconStart ? `${ww(23)}` : `${ww(6)}`)}px;
  background-color: #fff;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #C6C2DE" : "none"};
`;

export const Input = styled.input<InputContainerProps>`
  ${inputStyle}
  width: ${({ hasChildren }) => (hasChildren ? `${ww(137)}` : `${ww(160)}`)}px;
`;

export const InputSmall = styled.input<InputContainerProps>`
  ${inputStyle}
  width: ${({ hasChildren }) => (hasChildren ? `${ww(34)}` : `${ww(51)}`)}px;
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
  font-size: ${ww(6)};
  color: #f31;
`;
