import styled from "styled-components";
import { w, ww } from "../../../styles/responsive";

import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import { DetailContainerProps } from "../../../types/details";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #000000bb;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const SubContainer = styled.div<DetailContainerProps>`
  display: flex;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  width: ${ww(450)}px;
  height: ${ww(250)}px;
  flex-direction: column;
  padding: ${w(18, 15)};
  margin-bottom: ${ww(30)}px;
  position: relative;
  border-radius: ${ww(5)}px;
  box-shadow: 0 0.2rem 0.3rem #00000033;

  &:before {
    content: "";
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: ${ww(5)}px;
    opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
    transition: 1.2s ease-in-out;

    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 1%,
      rgba(20, 20, 71, 0.7) 40%,
      rgba(90, 122, 164, 0.21) 73%,
      rgba(15, 10, 92, 0) 99%
    );
    z-index: 1;
  }

  &:hover {
    & .closeButton {
      opacity: 1;
    }
  }

  & .closeButton {
    opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
    transition: 0.3s ease-in-out;
  }
`;

export const DetailContainer = styled.div<DetailContainerProps>`
  z-index: 2;

  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
  transition: 0.9s ease-in-out;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: space-around;
  width: 100%;
  margin: 0.2rem 0rem 1rem 0rem;

  p {
    font-weight: 400;
  }
`;

export const About = styled.p`
  color: #dbdbdb;
  font-size: 16px;
  font-weight: 400;
  max-length: 200;
  width: ${ww(300)}px;
`;

export const Text = styled.p`
  display: flex;
  margin-right: 1rem;
  color: #aeaeae;
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 370px;
  margin-top: 2rem;

  button {
    width: 370px;
    margin-bottom: ${ww(11)}px;
  }

  & :nth-child(2) {
    width: 175px;
  }

  & :nth-child(3) {
    width: 175px;
  }
`;

export const CloseIconContainer = styled.div`
  display: flex;
  width: ${ww(17)}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${ww(6)}px;
  right: ${ww(6)}px;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }

  path {
    fill: #fff;
  }
`;

export const CloseIcon = styled(Close).attrs({
  width: w(14),
  height: w(14),
})`
  display: flex;
`;
