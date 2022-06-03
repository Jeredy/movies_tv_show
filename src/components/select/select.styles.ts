import styled, { css } from "styled-components";
import { w, ww } from "../../styles/responsive";

import {
  SelectContainerProps,
  IconContainerProps,
  ShowOptionsProps,
} from "../../types/select";

const selectContainerSize = css<SelectContainerProps & IconContainerProps>`
  display: flex;
  height: ${ww(20)}px;
  radius: ${ww(3)}px;
  width: ${({ width }) => width}px;
  font-size: ${ww(12)}px;
  color: #00000070;
  padding-left: ${ww(6)}px;
  background: #fff;
  position: relative;
  border-radius: ${ww(3)}px;
  margin-bottom: ${ww(3)}px;
  border: ${({ isFocus }) => (isFocus ? "1px solid #C6C2DE" : "none")};
  z-index: 9;

  &:hover {
    cursor: pointer;
  }
`;

const selectStyle = css<SelectContainerProps>`
  display: flex;
  align-items: center;
  height: ${ww(20)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${ww(7)}px;
  position: relative;
`;

export const SelectContainer = styled.div<
  SelectContainerProps & IconContainerProps
>`
  ${selectContainerSize}
  width: ${({ width }) => width}px;
  max-width: ${({ width }) => width}px;
  padding-left: ${ww(6)}px;
  border: ${({ isFocus }) => (isFocus ? "1px solid #A1E3D866" : "none")};
`;

export const Select = styled.div<SelectContainerProps>`
  ${selectStyle}
  width: ${({ hasChildren, width }) =>
    hasChildren ? width! - 55 : width}px; //edit
`;

export const IconContainer = styled.div<IconContainerProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: ${ww(6)}px;
  left: none;
  transform: ${({ selected }) => (selected ? "rotate(-180deg)" : "none")};
`;

export const Text = styled.p`
  font-size: ${ww(7)}px;
  color: #8e8e8e;
`;

//SHOW OPTIONS
export const ShowContainer = styled(SelectContainer)<ShowOptionsProps>`
  position: absolute;
  flex-direction: column;
  top: ${ww(21)}px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  height: ${({ qtdeItems }) => ww(20) * qtdeItems}px;
  width: ${({ width }) => width}px;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.3rem #00000033;
`;

export const ShowOptions = styled(Select)`
  width: 100%;
  align-items: center;
  justify-content: ${({ hasCheckBox }) =>
    hasCheckBox ? "flex-start" : "center"};

  &:hover {
    cursor: pointer;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  border-bottom: 1px solid #a1e3d866;
`;
