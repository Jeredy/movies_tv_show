import styled from "styled-components";
import { CardStyleProps } from "../../types/card";

export const Container = styled.div<CardStyleProps>`
  display: flex;
  flex-direction: column;

  p {
    margin-left: ${({ index }) => (index === 0 ? "20px" : "0px")};
  }

  &:hover {
    p {
      transform: scale(1.05);
    }
  }
`;

export const CardContainer = styled.div<CardStyleProps>`
  display: flex;
  width: 150px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 0.2rem 0.3rem #4c4c4c;
  margin-right: 15px;
  transition: 0.2s ease-in-out;
  margin-left: ${({ index }) => (index === 0 ? "20px" : "0px")};
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 0.6rem #4c4c4c;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s ease-in-out;
  color: #6c6c6c;
`;
