import styled from "styled-components";
import { ww } from "../../styles/responsive";

interface ContainerProps {
  isLoading: boolean;
  disabled: boolean;
}

/* eslint-disable */
export const PrimaryContainer = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(45deg, #dc8665, #eeb462);
  height: 40px;
  box-shadow: 0 0.2rem 0.3rem #ffffff22;

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
    border: ${({ isLoading }) => (isLoading ? "none" : "1px solid #dc8665")};
    background: ${({ isLoading }) => (isLoading ? "#dc8665" : "#fff")};
    color: ${({ isLoading }) => (isLoading ? "#fff" : "#dc8665")};
    box-shadow: ${({ isLoading }) =>
      isLoading ? "none" : "0 0.2rem 0.3rem #c822ff44"};

    p {
      color: ${({ isLoading }) => (isLoading ? "#fff" : "#dc8665")};
    }

    path {
      fill: #dc8665;
    }
  }
`;

export const SecondaryContainer = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff22;
  height: 38.5px;
  border: 1px solid #dedede;
  box-shadow: 0 0.2rem 0.3rem #ffffff22;

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
    border: ${({ isLoading }) => (isLoading ? "none" : "1px solid #dc8665")};
    background: ${({ isLoading }) => (isLoading ? "#dc8665" : "#fff")};
    color: ${({ isLoading }) => (isLoading ? "#fff" : "#dc8665")};
    box-shadow: ${({ isLoading }) =>
      isLoading ? "none" : "0 0.2rem 0.3rem #c822ff44"};

    p {
      color: ${({ isLoading }) => (isLoading ? "#fff" : "#dc8665")};
    }

    path {
      fill: #dc8665;
    }
  }
`;
/* eslint-enable */

export const Text = styled.p`
  font-size: ${ww(9)}px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 600;
`;
