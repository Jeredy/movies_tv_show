import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/chevron_big_right.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 350px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A6949E15616A514884473E12153B1BDD4F595B97D2DEFD0F81C8CF805692D04/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal);
  position: relative;
  z-index: 888;

  &:before {
    content: "";
    display: flex;
    width: 100%;
    height: 350px;
    position: absolute;

    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 1%,
      rgba(20, 20, 71, 0.7) 30%,
      rgba(90, 122, 164, 0.21) 63%,
      rgba(15, 10, 92, 0.15) 99%
    );
    z-index: 1;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  max-width: 550px;
  flex-direction: column;
  padding-left: 2rem;
  z-index: 888;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1.6rem;
  z-index: 888;

  p {
    font-weight: 600;
  }
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
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  max-length: 200;
`;

export const Text = styled.p`
  display: flex;
  margin-right: 1rem;
  color: #c7c7c7;
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 370px;
  margin-top: 2rem;

  button {
    width: 170px;
  }
`;

export const Icon = styled(Arrow)`
  transform: rotate(180deg);
`;

export const IconFullScreen = styled(Expand)`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;
