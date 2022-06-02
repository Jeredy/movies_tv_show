import styled from "styled-components";
import { ww } from "../../styles/responsive";
import { CardStyleProps } from "../../types/card";

export const Container = styled.div<CardStyleProps>`
  display: flex;
  flex-direction: column;

  p {
    margin-left: ${({ index }) => (index === 0 ? ww(11) : 0)}px;
  }

  &:hover {
    p {
      transform: scale(1.05);
    }
  }
`;

export const CardContainer = styled.div<CardStyleProps>`
  display: flex;
  width: ${ww(86)}px;
  height: ${ww(114)}px;
  border-radius: ${ww(3)}px;
  box-shadow: 0 0.2rem 0.3rem #4c4c4c;
  margin-right: ${ww(8.5)}px;
  transition: 0.2s ease-in-out;
  margin-left: ${({ index }) => (index === 0 ? ww(11) : 0)}px;
  margin-bottom: ${ww(5.7)}px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 0.6rem #4c4c4c;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: ${ww(86)}px;
  height: ${ww(114)}px;
  object-fit: cover;
  border-radius: ${ww(3)}px;
`;

export const Text = styled.p`
  font-size: ${ww(9)}px;
  font-weight: 400;
  margin-top: ${ww(3)}px;
  max-width: ${ww(85.5)}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s ease-in-out;
  color: #6c6c6c;
`;
