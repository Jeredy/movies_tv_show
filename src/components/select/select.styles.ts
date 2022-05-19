import styled, { css } from "styled-components";

import {
  SelectContainerProps,
  IconContainerProps,
  ShowOptionsProps,
} from "../../types/select";
import { w, ww } from "../../styles/responsive";

const selectContainerSize = css<SelectContainerProps & IconContainerProps>`
  display: flex;
  height: ${ww(23)}px;
  radius: ${ww(3)}px;
  width: ${ww(165)}px;
  font-size: ${ww(12)}px;
  color: #00000070;
  padding-left: ${ww(6)}px;
  background: #fff;
  position: relative;
  border-radius: ${ww(3)}px;
  margin-bottom: ${ww(3)}px;
  border: ${({ isFocus }) => (isFocus ? "1px solid #C6C2DE" : "none")};
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`;

const selectStyle = css<SelectContainerProps>`
  display: flex;
  align-items: center;
  height: ${ww(23)}px;
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
  width: ${ww(165)}px;
  max-width: ${ww(165)}px;
  padding-left: ${ww(6)}px;
  border: ${({ isFocus }) => (isFocus ? "1px solid #C6C2DE" : "none")};
`;

export const SelectContainerSmall = styled.div<
  SelectContainerProps & IconContainerProps
>`
  ${selectContainerSize}
  width: ${ww(165)}px;
  padding-left: ${ww(6)}px;
  background-color: #fff;
  border: ${({ isFocus }) => (isFocus ? "1px solid #C6C2DE" : "none")};
`;

export const Select = styled.div<SelectContainerProps>`
  ${selectStyle}
  width: ${({ hasChildren }) => (hasChildren ? ww(171) : ww(188))}px;
`;

export const SelectSmall = styled.div<SelectContainerProps>`
  ${selectStyle}
  width: ${({ hasChildren }) => (hasChildren ? ww(34) : ww(51))}px;
`;

export const SelectTooSmall = styled.div<SelectContainerProps>`
  ${selectStyle}
  height:${ww(17)}px;
  width: ${({ hasChildren }) => (hasChildren ? ww(34) : ww(51))}px;
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
  color: #6e6893;
`;

export const ShowContainer = styled(SelectContainerSmall)<ShowOptionsProps>`
  position: absolute;
  flex-direction: column;
  top: ${ww(23)}px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  height: ${({ qtdeItems }) => ww(24) * qtdeItems}px;
  width: ${ww(165)};
  overflow-y: scroll;
`;

export const ShowOptions = styled(SelectSmall)`
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: ${ww(23)}px;

  &:hover {
    cursor: pointer;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  border-bottom: 1px solid #c6c2de;
`;
