import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/chevron_big_right.svg";
import { ww } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
`;

export const Page = styled.div`
  display: flex;
  flex: 8;
  height: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: ${ww(14)}px;
  width: ${ww(14)}px;
  border-radius: 50px;
  position: absolute;
  left: ${ww(106)}px;
  top: ${ww(57)}px;
  z-index: 9999;
  box-shadow: 0 -0.1rem 0.2rem #3b4ba244;
  transition: 0.1s ease-in-out;
  transform: rotate(180deg);

  &:hover {
    cursor: pointer;
  }

  &.active {
    transition: 0.3s ease-in-out;
    left: ${ww(23)}px;
    transform: rotate(0deg);
  }
`;

export const Icon = styled(Arrow)``;
