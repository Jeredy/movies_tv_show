import styled from "styled-components";
import { Link } from "react-router-dom";

import { MenuItemProps } from "../../types/menu";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.p`
  font-size: 14px;
  color: #7c7c7c;
  font-weight: 500;
`;

export const Text = styled.p<MenuItemProps>`
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#dc8665" : "#4b4b4b")};
  font-weight: 500;
  margin-left: 16px;
  text-align: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 0px 20px;
`;

export const ItemContainer = styled(Link)<MenuItemProps>`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background: ${({ selected }) =>
    selected ? "rgba(73, 93, 204, 0.1)" : "#fff"};
  padding-left: 30px;

  &:hover {
    cursor: pointer;
    background: rgba(73, 93, 204, 0.1);
  }
`;

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 20px;
`;
