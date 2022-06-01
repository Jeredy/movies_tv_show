import styled, { css } from "styled-components";
import { ww } from "../../styles/responsive";

import {
  IconContainerProps,
  InputContainerProps,
  InputLabel,
} from "../../types/input";

const inputContainerSize = css<InputContainerProps & IconContainerProps>`
  height: ${ww(23)}px;
  radius: ${ww(3)}px;
  width: ${({ width }) => width}px;
  font-size: ${ww(8)}px;
  color: #00000070;
  padding-left: ${({ iconStart }) =>
    iconStart ? `${ww(23)}px;` : `${ww(6)}px;`};
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

export const InputContainerPrimary = styled.div<
  InputContainerProps & IconContainerProps
>`
  ${inputContainerSize}
  width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  padding-left: ${({ iconStart }) => (iconStart ? `${ww(23)}` : `${ww(6)}`)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #A1E3D866" : "none"};
`;

export const InputContainerSecondary = styled.div<
  InputContainerProps & IconContainerProps
>`
  ${inputContainerSize}
  padding: 0px;
  background-color: #fff;
  border: none;
  border-bottom: ${({ hasError }) =>
    hasError ? "1px solid #f31" : "1px solid #A1E3D866"};
  border-radius: 0px;
  font-style: italic;
  font-weight: 400;

  input {
    font-size: ${ww(8)}px;
  }
`;

export const Input = styled.input<InputContainerProps>`
  height: ${ww(23)}px;
  font-size: ${ww(8)}px;
  width: ${({ hasChildren, width }) =>
    hasChildren ? width! - ww(31) : width! - ww(12)}px;
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
  font-size: ${ww(6)}px;
  color: #f31;
`;

export const Label = styled.p<InputLabel>`
  font-size: ${ww(7)}px;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};
  color: #7c7c7c;
`;
