import styled, { css } from "styled-components";
import { ww } from "../../styles/responsive";

import { InputContainerProps } from "../../types/input";

const inputContainerSize = css<InputContainerProps>`
  height: ${ww(20)}px;
  radius: ${ww(3)}px;
  width: ${({ width }) => width}px;
  font-size: ${ww(8)}px;
  color: #00000070;
  padding-left: ${ww(6)}px;
  background-color: #f5f5f5;
  position: relative;
  border-radius: ${ww(3)}px;
  margin-bottom: ${ww(3)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #A1E3D866" : "none"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${ww(7)}px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  ${inputContainerSize}
  width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  padding-left: ${ww(6)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #A1E3D866" : "none"};
`;

export const Input = styled.input<InputContainerProps>`
  height: ${ww(20)}px;
  font-size: ${ww(8)}px;
  width: ${({ hasChildren, width }) =>
    hasChildren ? width! - ww(31) : width! - ww(12)}px;
`;

export const TextError = styled.p`
  font-size: ${ww(6)}px;
  color: #f31;
`;
