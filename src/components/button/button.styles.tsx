import styled, { css } from "styled-components";
import { ww } from "../../styles/responsive";
import { ContainerProps } from "../../types/button";

/* eslint-disable */
const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${ww(20)}px;
  z-index: 2;
`;

export const PrimaryContainer = styled.button<ContainerProps>`
  ${buttonStyle}
  background-color: #069A8E;

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
    border: ${({ isLoading }) => (isLoading ? "none" : "1px solid #069A8E")};
    background-color: ${({ isLoading }) => (isLoading ? "#069A8E" : "#fff")};
    color: ${({ isLoading }) => (isLoading ? "#fff" : "#069A8E")};
    box-shadow: ${({ isLoading }) =>
      isLoading ? "none" : "0 0.2rem 0.3rem #069A8E44"};

    p {
      color: ${({ isLoading }) => (isLoading ? "#fff" : "#069A8E")};
    }

    path {
      fill: #069a8e;
    }
  }
`;

export const SecondaryContainer = styled.button<ContainerProps>`
  ${buttonStyle}
  background-color: #fff;
  border: 1px solid #069a8e;
  color: #069a8e;

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
    border: ${({ isLoading }) => (!isLoading ? "none" : "1px solid #069A8E")};
    background-color: ${({ isLoading }) => (!isLoading ? "#069A8E" : "#fff")};
    color: ${({ isLoading }) => (!isLoading ? "#fff" : "#069A8E")};
    box-shadow: ${({ isLoading }) =>
      !isLoading ? "none" : "0 0.2rem 0.3rem #069A8E44"};

    p {
      color: #fff;
    }

    path {
      fill: #fff;
    }
  }
`;

export const CustomContainer = styled.button<ContainerProps>`
  ${buttonStyle}
  background-color: ${({ customColor }) => customColor};
  border: ${({ customColor }) => `1px solid ${customColor}`};

  p {
    color: ${({ customColor }) =>
      customColor === "#EFD700" ? "#383838" : "#fff"};
  }

  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
    border: ${({ isLoading, customColor }) =>
      isLoading ? "none" : `1px solid ${customColor}`};
    background-color: ${({ isLoading, customColor }) =>
      !isLoading
        ? customColor === "#EFD700"
          ? customColor
          : "#fff"
        : customColor === "#EFD700"
        ? customColor
        : "#f31"};

    box-shadow: ${({ isLoading, customColor }) =>
      isLoading ? "none" : `0 0.2rem 0.3rem ${customColor}44`};

    p {
      color: ${({ isLoading, customColor }) =>
        isLoading
          ? customColor === "#EFD700"
            ? "#383838"
            : "#fff"
          : customColor === "#EFD700"
          ? "#383838"
          : customColor};
    }

    path {
      fill: #fff;
    }
  }
`;
/* eslint-enable */

export const Text = styled.p<ContainerProps>`
  text-transform: capitalize;
  color: ${({ inverterColor }) => (inverterColor ? "#069A8E" : "#fff")};
  font-size: ${ww(7)}px;
`;
