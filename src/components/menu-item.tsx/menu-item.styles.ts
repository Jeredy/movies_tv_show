import styled from "styled-components";
import { w, ww } from "../../styles/responsive";

import { MenuItemProps } from "../../types/menu";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.p`
  font-size: ${ww(8)}px;
  color: #7c7c7c;
  font-weight: 500;
`;

export const Text = styled.p<MenuItemProps>`
  font-size: ${ww(8)}px;
  color: ${({ selected }) => (selected ? "#069A8E" : "#4b4b4b")};
  font-weight: 500;
  margin-left: ${ww(9)}px;
  text-align: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  height: ${ww(23)}px;
  width: 100%;
  padding: ${w(0, 11)};
`;

export const ItemContainer = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  height: ${ww(23)}px;
  width: 100%;
  background: ${({ selected }) => (selected ? "#a1e3d833" : "#fff")};
  padding-left: ${ww(17)}px;

  &:hover {
    cursor: pointer;
    background: #a1e3d833;
  }
`;

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  padding-top: ${ww(11)}px;
`;
