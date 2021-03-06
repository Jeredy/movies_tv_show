import styled from "styled-components";
import { ww } from "../../styles/responsive";

import { InputContainerProps } from "../../types/input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${ww(7)}px;
`;

export const TextAreaContainer = styled.div<InputContainerProps>`
  height: ${ww(57)}px;
  max-height: ${ww(57)}px;
  radius: ${ww(3)}px;
  min-width: 100%;
  max-width: ${ww(57)}px;
  font-size: ${ww(8)}px;
  color: #00000070;
  background-color: #f5f5f5;
  padding: ${ww(6)}px;
  position: relative;
  border-radius: ${ww(3)}px;
  margin-bottom: ${ww(3)}px;
  border: ${({ isFocus, hasError }) =>
    hasError ? "1px solid #f31" : isFocus ? "1px solid #A1E3D866" : "none"};
`;

export const TextArea = styled.textarea<InputContainerProps>`
  height: ${ww(46)}px;
  max-height: ${ww(57)}px;
  font-size: ${ww(8)}px;
  min-width: 100%;
  max-width: ${ww(57)}px;
  word-break: break-all;
`;

export const TextError = styled.p`
  font-size: ${ww(6)}px;
  color: #f31;
`;
