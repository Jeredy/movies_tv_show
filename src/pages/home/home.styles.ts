import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/chevron_big_right.svg";

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
  height: 25px;
  width: 25px;
  border-radius: 50px;
  position: absolute;
  left: 190px;
  top: 100px;
  z-index: 9999;
  box-shadow: 0 0.1rem 0.2rem #3b4ba244;
  transition: 0.1s ease-in-out;
  transform: rotate(180deg);

  &:hover {
    cursor: pointer;
  }

  &.active {
    transition: 0.3s ease-in-out;
    left: 40px;
    transform: rotate(0deg);
  }
`;

export const Icon = styled(Arrow)``;
